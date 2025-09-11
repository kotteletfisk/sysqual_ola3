package com.kfisk;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.junit.jupiter.api.Test;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.utility.MountableFile;

public class PerfTest {

    @Test
    void runLoadTest() throws Exception {
        try (GenericContainer<?> api = new GenericContainer<>("taskmanageapi:test")
                .withEnv("APP_ENV", "test")
                .withCopyFileToContainer(
                        MountableFile.forHostPath("perf-tests/test.db"),
                        "/data/test.db")
                .withExposedPorts(7000)) {

            api.start();
            int mappedPort = api.getMappedPort(7000);

            File reportDir = new File("perf-tests/report");

            deleteDirectoryRecursively(reportDir);
            reportDir.mkdirs();

            File resultsFile = new File("perf-tests/results.jtl");

            if (resultsFile.exists() && !resultsFile.delete()) {
                throw new IOException("Failed to delete previous results file: " + resultsFile.getAbsolutePath());
            }

            String uid = new ProcessBuilder("id", "-u").start()
                    .inputReader().readLine();
            String gid = new ProcessBuilder("id", "-g").start()
                    .inputReader().readLine();
            
            System.out.println("Read user: " + uid + ":" + gid);

            ProcessBuilder pb = new ProcessBuilder(
                    "docker", "run", "--rm",
                   // "-u", uid + ":" + gid,
                    "-v", new File("perf-tests").getAbsolutePath() + ":/jmeter",
                    "-w", "/jmeter",
                    "justb4/jmeter",
                    "-n",
                    "-t", "test-plan.jmx",
                    "-JAPI_HOST=host.docker.internal",
                    "-JAPI_PORT=" + mappedPort,
                    "-l", "results.jtl",
                    "-e", "-o", "report"
            );
            pb.inheritIO();
            Process proc = pb.start();
            streamOutput(proc.getInputStream(), "[Jmeter-stdout]: ");
            streamOutput(proc.getErrorStream(), "[Jmeter-stderr]: ");


            int exit = proc.waitFor();
            if (exit != 0) {
                throw new RuntimeException("JMeter test failed. Exit Status: " + exit);
            }
        }
    }

    private void deleteDirectoryRecursively(File dir) throws IOException {
        if (dir.exists()) {
            File[] contents = dir.listFiles();
            if (contents != null) {
                for (File f : contents) {
                    if (f.isDirectory()) {
                        deleteDirectoryRecursively(f);
                    } else {
                        if (!f.delete()) {
                            throw new IOException("Failed to delete file: " + f.getAbsolutePath());
                        }
                    }
                }
            }
            if (!dir.delete()) {
                throw new IOException("Failed to delete directory: " + dir.getAbsolutePath());
            }
        }
    }

    private static void streamOutput(InputStream input, String prefix) {
    new Thread(() -> {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(input))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(prefix + line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }).start();
}
}
