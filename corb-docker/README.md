# CoRB - Content Reprocessing in Bulk

This provides a Dockerfile to build a containerized environment for running CoRB (Content Reprocessing in Bulk). The container includes the corb.sh script and required Java libraries, as provided in the Data Integration course materials (Unit 03).

## Configuration Changes
Notice the following changes, which are necessary to ensure this Docker container works with a MarkLogic Docker container.


* XCC-HOSTNAME: Updated from `localhost` to `host.docker.internal` to enable communication between the CoRB container and the MarkLogic Docker container.
* URIS-MODULE and PROCESS-MODULE in `unit03/ex05.properties`, `unit03/laba.properties`, and `unit03/labb.properties`:
  Adjusted the relative paths to use the mounted paths within the Docker container.

Example
```bash
XCC-USERNAME=admin
XCC-PASSWORD=admin
XCC-HOSTNAME=host.docker.internal
XCC-PORT=8055
XCC-DBNAME=customer360
THREAD-COUNT=4
URIS-MODULE=/app/options/ex05_uris.xqy|ADHOC
PROCESS-MODULE=/app/options/ex05_transformation.xqy|ADHOC
```

*Important: Ensure that you run all the Docker commands below within the ./corb-docker directory.*

## Building the Docker Image
Ensure that you run this command within the ./corb-docker directory:
```bash
docker build -t corb-docker .
```

## Running CoRB

### Exercise: Use CoRB for a Batch Process
Run the container using the `ex05.properties` file for a batch process:
```bash
docker run --rm -v "$(pwd)/unit03/:/app/options" corb-docker /app/options/ex05.properties
```

### Lab: Add Canonical Data
Run the container using the `laba.properties` file:
```bash
docker run --rm -v "$(pwd)/unit03/:/app/options" corb-docker /app/options/laba.properties
```

Run the container using the `labb.properties` file:
```bash
docker run --rm -v "$(pwd)/unit03/:/app/options" corb-docker /app/options/labb.properties
```