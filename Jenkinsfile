pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/harsh89shakya/api-ui-project.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        bat 'docker build -t harsh89shakya/api-ui-project:latest .'
      }
    }
    stage('Push Docker Image') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'docker-hub-cred',
          usernameVariable: 'USER',
          passwordVariable: 'PASS'
        )]) {
          bat 'docker login -u %USER% -p %PASS%'
          bat 'docker push harsh89shakya/api-ui-project:latest'
        }
      }
    }
  }
}