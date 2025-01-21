# Use a lightweight Java runtime image
FROM openjdk:11-jre-slim

# Set the working directory
WORKDIR /app

# Copy the corb.sh script and mark it as executable
COPY corb.sh /app/corb.sh
RUN chmod +x /app/corb.sh

# Copy the lib directory with the CORB and XCC JAR files
COPY lib /app/lib

# Set the entrypoint to the CORB script
ENTRYPOINT ["/app/corb.sh"]