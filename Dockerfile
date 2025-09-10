FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -B -DskipTests package

FROM eclipse-temurin:17-jre-jammy

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

COPY src/main/resources/test.db /app/test.db

EXPOSE 7000
ENTRYPOINT ["java","-jar","app.jar"]
