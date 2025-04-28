pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'yashkrp/pizza-website'
    }

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ypanjwani/pizza-paradise.git', credentialsId: 'github-credentials'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}")
                }
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-credentials', url: '']) {
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
                        docker stop pizza-frontend-container || echo 'No existing container to stop'
                        docker rm pizza-frontend-container || echo 'No existing container to remove'
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
