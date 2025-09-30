# OLA3 - System Quality

### Made by

- Lasse Hansen - cph-lh479@stud.ek.dk
- Pelle Hald Vedsmand - cph-pv73@stud.ek.dk
- Nicolai Rosendahl - cph-nr135@stud.ek.dk


## Objective of assignment: 

In this assignment we will further enhance the code quality and test coverage of our Task application.
We will implement mocking libraries for more efficiently being able to isolate parts of the program for unit testing. 
Use PMD as a static code analysis tool to help us enforce coding styles, good practices and potential bugs.

Based on static code analysis and peer reviews between programmers, we will refactor the codebase to enhance quality and testability.

## Deliverables: 

-  Refined Task Service source code. 
-  Unit tests (with mocks) for core functionality. 
-  PMD report (or equivalent for C#). 
-  JaCoCo coverage report (minimum 75%).

## Process

### Mocking
We decided to use Mockito library for mocking resources that in earlier iterations, had been hard to test because of dependencies on other functionality. 

The route controller had before only been tested in system tests. To better cover internal handling of HTTP-requests we decided to mock the persistance layer. During this, we found out we had unnecessary dependencies between database and our route controller, by a Connection object. This made it hard to mock the PersistenceManager. We proceeded to refactor Routecontroller and PersistanceManager to decouple them, injecting our own logic instead of an SQL-tied object. 

Now we could mock the PersistenceManager with Mockito, and create a test suite for the Isolated Javalin instance with route handling. 

We used this setup, for validating user input.

### Boundary Analysis and Partition Equilavence
We defined rules for input validation for task titles to be:
- UTF-8 valid
- At least 1 character
- At most 20 characters

We group these into the following partitions:

| Invalid     | Valid                       | Invalid    | Invalid       |
| ----------- | -----------                 | ---------- | ---------     |
| input < 1   | input >= 1 AND input <= 20  | input > 20 | Invalid UTF-8 |


We can cover the test cases with 5 boundary values.
We implemented the tests with the boundary values 0, 1, 20, 21 and an UTF-invalid byte.

Tests was implemented in [RouteTest.java](src/test/java/com/kfisk/RouteTest.java)

### PMD - Static Code Analysis

We implemented PMD report generation in the `mvn site` build cycle for static code analysis. We use the quickstart ruleset from PMD, since it covers most basic Java practices like unused imports, access modifier issues, unused variables etc.

It generated a report where it had found some issues:
- Variable name with bad characters
- Unnecessary public constructor on Utility (Main) class
- An unused Local variable

Full initial report is found [here](documentation/pmd-before.html)

We refactored the codebase to adress the priority 1. issues found. Post-refactor report is found [here](reports/pmd.html).

### Code coverage report

We had implemented Jacoco in our earlier assignment, and even with our new RouteController testsuite, we managed a coverage of 94% total. 

Report is found [here](reports/jacoco/index.html).


## Additional Reflection

We find the static code analysis tools quite helpful, not only for discovering potential bugs and bad practices, but also for enforcing code styles. It's very useful it can be configured to fail a build on specified violations, forcing a homogenous code style across the codebase. 

Coverage reports are useful as well, because it can be hard to identify the logical branching of code. it gives a clear indication of what is tested and not. 

We found mocking to be bit gamechanging when it comes to writing testable code. It allows us to isolate parts of the codebase that normally has dependencies, and to identify tightly coupled code that was hard to mock

The code reviewing process can be a bit tedious, since the time of at least two people have to be allocated, but it can be really helpful to have a second pair of eyes on a solution. Usually theres a lot of things that haven't been thought about, so both futureproofing the code and having more of the team understanding what's going on in the codebase, can make sure we're all going in the same direction.

I think think boundary analysis can be useful for clearly understanding fx user input restriction, and giving good test coverage early.
Equilavence partitioning is likewise useful for understanding exact valid and invalid input groups, and potentially reducing the amount of tests needed to target a partition.

for example, it made me realize that another invalid state than a too small or too large string length, might be that the input is a valid string at all. 


