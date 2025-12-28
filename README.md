## Overview ##
A Node.js (Express) project serving a simple UI and API, containerized with Docker and automated via Jenkins CI/CD. Demonstrates modern DevOps practices from code to deployment.

## Features ##
-Express.js backend serving UI (/) and API (/api/hello)
-HTML UI with responsive meta tags
-RESTful JSON API endpoint
-Dockerized with Alpine Linux for minimal size
-Git/GitHub workflow (branch rename, remote setup, push)
-Jenkins pipeline: Checkout → Build → Push to Docker Hub
-Local testing by pulling image from Docker Hub

## Prerequisites ##
-Node.js 18+ and npm (for local non-Docker run).
-Docker installed and running.
-Git installed and configured with username & email.
-GitHub account and repository created.
-Jenkins server with:
    -Docker available on the agent
    -Credentials for Docker Hub
    -Access to the GitHub repository

## CI/CD Pipeline ##
-Jenkins checks out code from GitHub
-Builds Docker image with unique tag (BUILD_NUMBER)
-Pushes to Docker Hub

## Testing ##
-Pull image: docker pull yourusername/api-ui-project:BUILD_NUMBER
-Run container: docker run -p 3000:3000 yourusername/api-ui-project:BUILD_NUMBER
-Test UI/API endpoints in browser