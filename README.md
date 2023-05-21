[![CircleCI](https://dl.circleci.com/status-badge/img/gh/ankur1230/Udacity-DevOps-Capstone/tree/main.svg?style=svg)](https://app.circleci.com/pipelines/github/lampqt1997/lampqt_Devops_Capstone)

# Capstone Project

This is the capstone project for the Udacity Cloud DevOps Engineer Nanodegree program. The project involves building, linting, and deploying an application using various tools and technologies.


## Project Structure
The project repository has the following structure:
.
- ├── app
- │   ├── deployment.yaml
- │   └── Dockerfile
- │   └── index.js
- └── eks
- └── cluster.yaml


- `app`: Contains the application code and configuration files.
- `app/deployment.yaml`: YAML file used for deploying the application using `kubectl apply`.
- `app/Dockerfile`: Dockerfile used for building the application Docker image.
- `eks`: Contains the EKS cluster configuration files.
- `eks/cluster.yaml`: YAML file used for creating the EKS cluster using `eksctl`.

## Deployment Steps

To deploy the application, follow these steps:

- Build the application: 
  - Use the appropriate build commands based on your application requirements and technologies.
- Lint the application: 
  - Use the appropriate linting tools or scripts to ensure code quality and adherence to best practices.
- Build the Docker image: 
  - Use the docker build command to build the Docker image for the application. Make sure you are in the app directory and run the command: `docker build -t <image_name>` .
- Create the EKS cluster: 
  - Use the eksctl command along with the cluster.yaml file to create the EKS cluster. For example: `eksctl create cluster -f eks/cluster.yaml`
- Deploy the application: 
  - Use the kubectl apply command with the deployment.yaml file to deploy the application to the EKS cluster. For example: `kubectl apply -f app/deployment.yaml`

