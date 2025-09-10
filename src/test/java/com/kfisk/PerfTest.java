package com.kfisk;

import org.junit.jupiter.api.Test;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.images.builder.ImageFromDockerfile;

import java.io.File;
import java.nio.file.Paths;

public class PerfTest {

    @Test
    void runLoadTest() throws Exception {
        ImageFromDockerfile apiImage = new ImageFromDockerfile()
                .withFileFromPath(".", Paths.get("."));

        try (GenericContainer<?> api = new GenericContainer<>(apiImage)
                .withExposedPorts(7000)) {

            api.start();
            int mappedPort = api.getMappedPort(7000);
            String apiHost = api.getHost();

            File reportDir = new File("perf-tests/report");
            if (reportDir.exists()) {
                for (File f : reportDir.listFiles()) f.delete();
            } else {
                reportDir.mkdirs();
            }

            ProcessBuilder pb = new ProcessBuilder(
                    "docker", "run", "--rm",
                    "-v", new File("perf-tests").getAbsolutePath() + ":/jmeter",
                    "-w", "/jmeter",
                    "justb4/jmeter",
                    "-n",
                    "-t", "test-plan.jmx",
                    "-JAPI_HOST=" + apiHost,
                    "-JAPI_PORT=" + mappedPort,
                    "-l", "results.jtl",
                    "-e", "-o", "report"
            );
            pb.inheritIO();
            Process proc = pb.start();
            int exit = proc.waitFor();
            if (exit != 0) {
                throw new RuntimeException("JMeter test failed");
            }
        }
    }
}

