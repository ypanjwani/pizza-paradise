pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'yashkrp/pizza-paradise'
    }

    stages {
        stage('Clone repository') {
            steps {
                script {
                    // Disable SSL verification temporarily for Git
                    sh 'git config --global http.sslVerify false'
                }
                git branch: 'main', url: 'https://github.com/ypanjwani/pizza-paradise.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    echo "Building Docker image..."
                    sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
                }
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerCred', url: '']) {
                    script {
                        docker.image("${DOCKER_IMAGE}").push('latest')
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh """
                        docker stop pizza-frontend-container || true
                        docker rm pizza-frontend-container || true
                        docker run -d --name pizza-frontend-container -p 5000:80 ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
