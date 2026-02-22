🚀 Dockerized Fullstack Web Application (MERN + AI Agent)

A production-style fullstack web application built using the MERN stack and containerized using Docker. The project follows microservices architecture and integrates real-time monitoring using Prometheus and Grafana.

📌 Project Overview

This project demonstrates:

Fullstack MERN application development

Microservice-based AI Agent integration

Multi-container orchestration using Docker Compose

Real-time monitoring and observability

Version control using Git and GitHub

🏗 Architecture

The system consists of:

Frontend – React

Backend – Node.js + Express

Database – MongoDB

AI Agent – Separate microservice

Monitoring – Prometheus + Grafana

Monitoring stack:

Prometheus scrapes metrics from the backend /metrics endpoint

Grafana visualizes CPU usage, memory usage, and service health

All services are orchestrated using Docker Compose.

🛠 Tech Stack

React

Node.js

Express

MongoDB

Docker

Docker Compose

Prometheus

Grafana

📂 Project Structure
project-root/
│
├── frontend/
├── backend/
├── ai-agent/
├── docker-compose.yml
├── prometheus.yml
└── README.md
⚙️ Implementation Steps
1️⃣ Clone the Repository
git clone <your-repo-link>
cd project-folder
2️⃣ Ensure Docker is Running

Check installation:

docker --version
docker compose version
3️⃣ Build and Start Containers
docker compose up --build -d

This will:

Build Docker images

Create containers

Configure networking

Start all services

4️⃣ Verify Running Containers
docker ps

You should see:

frontend

backend

mongodb

ai-agent

prometheus

grafana

5️⃣ Access Services

Frontend:
http://localhost:3000

Backend API:
http://localhost:5000

Prometheus:
http://localhost:9090

Grafana:
http://localhost:3001

(Default login: admin / admin)

📊 Monitoring Setup

Prometheus configured using prometheus.yml

Scrapes metrics from backend /metrics

Grafana connected to Prometheus as data source

Dashboard includes CPU, memory, and service health metrics

🔄 Restart Commands

Start project:

docker compose up -d

Stop project:

docker compose down
🎯 Key Learning Outcomes

Containerized MERN application deployment

Microservices architecture implementation

Docker Compose orchestration

Observability and monitoring integration

DevOps workflow practices
