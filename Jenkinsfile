pipeline {
    agent any

    environment {
        NODE_HOME = "${tool 'NodeJS'}" // Assuming NodeJS is installed as a tool in Jenkins
        PATH = "${env.NODE_HOME}/bin:${env.PATH}"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'CI-Sia', url: 'https://github.com/elton7801/activepieces.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Run build for all projects using Nx
                    bat 'npm run build'
                }
                archiveArtifacts artifacts: 'dist/**/*', allowEmptyArchive: true
            }
        }


        stage('Test') {
            steps {
                script {
                    // Run tests
                    bat 'npm run test'
                }
            }
        }
    
}

post {
        success {
            echo 'Build succeeded!!'
            // You could add notification steps here, e.g., send an email
        }
        failure {
            echo 'Build failed!!'
            // You could add notification steps here, e.g., send an email or Slack message
        }
    }
    }


