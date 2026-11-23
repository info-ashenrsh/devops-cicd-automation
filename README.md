# 🚀 DevOps CI/CD Automation with GitHub Actions, Docker & Microsoft Azure

A hands-on DevOps project demonstrating how to automate the process of building, testing, containerizing, publishing, and deploying a Node.js web application using **GitHub Actions, Docker, GitHub Container Registry (GHCR), and Microsoft Azure**.

The project implements a CI/CD pipeline that automatically deploys application updates to an Azure Linux Virtual Machine whenever changes are merged into the `main` branch.

---

## 🌐 Live Application

**GitHub Repository:** https://github.com/info-ashenrsh/devops-cicd-automation

---

## 🎯 Project Objectives

- Understand the fundamentals of DevOps and CI/CD.
- Manage source code using Git and GitHub.
- Develop and test a Node.js application.
- Containerize applications using Docker.
- Automate testing and image publishing using GitHub Actions.
- Store Docker images in GitHub Container Registry.
- Deploy applications to Microsoft Azure Linux Virtual Machines.
- Implement automated application updates through CI/CD workflows.
- Verify application availability using health checks.

---

## 🛠️ Technologies & Tools

| Technology | Purpose |
|---|---|
| Git & GitHub | Version control and source code management |
| Node.js | Backend application runtime |
| Express.js | Web application framework |
| JavaScript | Application development |
| Supertest | Application endpoint testing |
| Docker | Application containerization |
| Docker Compose | Container management and orchestration |
| GitHub Actions | CI/CD automation |
| GitHub Container Registry | Docker image storage |
| Microsoft Azure | Cloud infrastructure |
| Ubuntu Linux | Server operating system |
| Apache | Reverse proxy |
| SSH | Secure remote server access |

---

## 🏗️ Project Architecture

```text
       Developer
           |
           v
      Git & GitHub
           |
           v
    GitHub Repository
           |
           v
      GitHub Actions
           |
           v
   Automated Testing
           |
           v
    Docker Image Build
           |
           v
  GitHub Container Registry
           |
           v
     Automated Deployment
           |
           v
    Microsoft Azure VM
           |
           v
       Ubuntu Linux
           |
           v
         Apache
      Reverse Proxy
           |
           v
    Docker Container
           |
           v
    Node.js Application
           |
           v
      Live Dashboard
```

---

## 📂 Project Structure

```text
devops-cicd-automation/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── docker-publish.yml
│       └── deploy-azure.yml
│
├── app/
│   ├── public/
│   │   ├── index.html
│   │   └── style.css
│   │
│   ├── tests/
│   │   └── app.test.js
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
│
├── .dockerignore
└── README.md
```

---

## ⚙️ CI/CD Pipeline

The project uses GitHub Actions to automate the software delivery process.

### 1. Continuous Integration (CI)

Whenever code is pushed to the `main` branch or a Pull Request is created:

- GitHub Actions checks out the source code.
- Node.js environment is configured.
- Dependencies are installed.
- Automated tests are executed.
- Application test results are verified.

### 2. Docker Image Build & Publish

After successful CI validation:

- Docker Buildx builds the application image.
- The image is tagged and published to GitHub Container Registry.
- The latest image becomes available for deployment.

**Docker Image:**

```text
ghcr.io/info-ashenrsh/devops-cicd-automation:latest
```

### 3. Continuous Deployment (CD)

After the Docker publishing workflow completes successfully:

- GitHub Actions securely connects to the Azure VM through SSH.
- The latest Docker image is pulled from GHCR.
- The previous application container is replaced.
- A new container is started.
- Application health is checked.
- Apache reverse proxy connectivity is verified.

---

## 🐳 Run the Application Locally

### Prerequisites

- Node.js 22
- npm
- Docker

### Clone the Repository

```bash
git clone https://github.com/info-ashenrsh/devops-cicd-automation.git
```

```bash
cd devops-cicd-automation
```

### Install Dependencies

```bash
cd app
npm install
```

### Run Tests

```bash
npm test
```

### Start the Application

```bash
npm start
```

Open:

```text
http://localhost:3000
```

### Check Application Health

```bash
curl http://localhost:3000/health
```

Expected response:

```json
{
  "status": "healthy",
  "application": "DevOps Learning Dashboard"
}
```

---

## 🐳 Docker Deployment

### Build Docker Image

From the repository root:

```bash
docker build -t devops-dashboard ./app
```

### Run Docker Container

```bash
docker run -d \
  --name devops-dashboard \
  -p 3000:3000 \
  --restart unless-stopped \
  devops-dashboard
```

### Verify Container

```bash
docker ps
```

### Check Container Logs

```bash
docker logs devops-dashboard
```

---

## ☁️ Microsoft Azure Deployment

The application is deployed on an Ubuntu Linux Virtual Machine hosted on Microsoft Azure.

### Azure Infrastructure

| Configuration | Value |
|---|---|
| Cloud Provider | Microsoft Azure |
| Virtual Machine | linux-web-server |
| Operating System | Ubuntu 24.04 LTS |
| Application Runtime | Docker |
| Application Port | 3000 |
| Public HTTP Port | 80 |
| Web Server | Apache |
| Remote Access | SSH |

### Deployment Process

1. Create an Azure Linux Virtual Machine.
2. Configure secure SSH access.
3. Install and configure Docker.
4. Pull the application image from GHCR.
5. Run the application inside a Docker container.
6. Configure Apache as a reverse proxy.
7. Configure Azure Network Security Group rules.
8. Verify application availability through the public IP address.

---

## 🔐 GitHub Secrets Configuration

The deployment workflow uses GitHub repository secrets for secure SSH access.

Configure the following secrets under:

**GitHub Repository → Settings → Secrets and variables → Actions**

| Secret Name | Description |
|---|---|
| `AZURE_HOST` | Azure VM public IP address |
| `AZURE_USER` | Azure VM username |
| `AZURE_SSH_KEY` | Private deployment SSH key |

**Security Notes:**

- Never expose private SSH keys.
- Never commit credentials or secrets to GitHub.
- Use GitHub Actions secrets for sensitive deployment information.
- Use SSH key-based authentication.

---

## 🩺 Application Health Check

The application provides a health endpoint:

```text
GET /health
```

Expected response:

```json
{
  "status": "healthy",
  "application": "DevOps Learning Dashboard"
}
```

Useful Docker monitoring commands:

```bash
sudo docker ps
```

```bash
sudo docker stats
```

```bash
sudo docker logs --tail 50 devops-dashboard
```

---

## 📸 Project Screenshots

Add your actual project screenshots to a folder named `screenshots/` and include them here.

Suggested screenshots:

- GitHub repository overview
- GitHub Actions CI workflow
- Docker image in GitHub Container Registry
- Azure Virtual Machine running status
- Docker container running on Azure
- Live application dashboard
- Successful automated deployment workflow

Example:

```markdown
![Live Dashboard](screenshots/dashboard.png)

![GitHub Actions](screenshots/github-actions.png)

![Azure Deployment](screenshots/azure-deployment.png)
```

---

## 📚 Key Learning Outcomes

Through this project, I gained practical experience in:

- Understanding DevOps principles and CI/CD pipelines.
- Managing Git branches and Pull Requests.
- Developing and testing Node.js applications.
- Creating Dockerfiles and building container images.
- Automating workflows using GitHub Actions.
- Publishing container images to GHCR.
- Configuring and managing Azure Linux Virtual Machines.
- Deploying applications through SSH automation.
- Configuring Apache reverse proxy.
- Monitoring containers and checking application health.

---

## 🚀 Future Improvements

- Implement Kubernetes for container orchestration.
- Use Terraform for Infrastructure as Code.
- Integrate Prometheus and Grafana for monitoring.
- Implement automated rollback strategies.
- Configure HTTPS using SSL/TLS certificates.
- Add application logging and alerting.
- Introduce security scanning into the CI/CD pipeline.

---

## 👨‍💻 Author

**Ashen Rashmika**

Undergraduate | Cloud Computing | DevOps | Software Development

GitHub: [@info-ashenrsh](https://github.com/info-ashenrsh)

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub!

**Built with curiosity, continuous learning, and hands-on DevOps practice.** 🚀
