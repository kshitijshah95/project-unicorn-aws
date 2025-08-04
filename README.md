# 🚀 Project Unicorn AWS - Phase 2: Advanced CI/CD Learning

This is the **AWS-focused version** of Project Unicorn, designed for learning enterprise-level CI/CD with Docker containers and AWS services.

## 🎯 Learning Objectives

### **What You'll Master in Phase 2:**
- **AWS ECS (Elastic Container Service)** - Container orchestration
- **AWS ECR (Elastic Container Registry)** - Docker image storage
- **AWS Application Load Balancer** - Traffic routing and SSL
- **AWS Route53** - DNS management for dev/qa/prod
- **GitHub Actions + AWS** - Advanced CI/CD pipelines
- **Infrastructure as Code** - Managing AWS resources with code
- **Multi-Environment Strategy** - dev, qa, prod workflows

## 🏗️ Architecture Overview

```
GitHub → GitHub Actions → Build Docker → Push to ECR → Deploy to ECS
                                                          ↓
                                    ALB (Load Balancer) → Route53 (DNS)
                                          ↓
                          dev.unsugar.io | qa.unsugar.io | unsugar.io
```

## 🌍 Environments

| Environment | URL | Purpose | AWS Resources |
|-------------|-----|---------|---------------|
| **Development** | `dev.unsugar.io` | Feature development | ECS Service, ALB Target Group |
| **QA** | `qa.unsugar.io` | Testing and validation | ECS Service, ALB Target Group |
| **Production** | `unsugar.io` | Live application | ECS Service, ALB Target Group |

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Containerization**: Docker (multi-stage builds)
- **CI/CD**: GitHub Actions
- **Cloud**: AWS (ECS, ECR, ALB, Route53, CloudFormation)
- **DNS**: Route53 with custom domain (unsugar.io)

## 🚀 Phase 2 Implementation Status

### **Phase 2A: Foundation & Safety**
- [x] Clone project and create new GitHub repo
- [x] AWS account setup with budget limits
- [x] IAM user/role configuration
- [x] Cost monitoring setup

### **Phase 2B: Container Infrastructure**
- [x] AWS ECR repository setup
- [x] GitHub Actions workflow for ECR
- [ ] ECS cluster creation
- [ ] Task definitions and services
- [ ] Application Load Balancer configuration

### **Phase 2C: Multi-Environment CI/CD**
- [ ] Development environment pipeline
- [ ] QA environment pipeline
- [ ] DNS configuration (dev.unsugar.io, qa.unsugar.io)
- [ ] Environment-specific configurations

### **Phase 2D: Production & Advanced Features**
- [ ] Production deployment pipeline
- [ ] Blue-green deployment strategy
- [ ] Monitoring and logging
- [ ] Rollback procedures

## 💰 Cost Management

### **Estimated Monthly Costs (Learning Phase)**
- ECS Fargate: ~$10-20/month
- ALB: ~$20/month
- ECR: ~$1-5/month
- Route53: ~$0.50/month
- **Total**: ~$30-45/month for learning

### **Budget Safety Measures**
- AWS Budget alerts at $25, $40, $50
- Resource tagging for cost tracking
- Automatic resource cleanup scripts
- Regular cost reviews

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Build Docker image
docker build -t project-unicorn-aws .

# Run container locally
docker run -p 3000:3000 project-unicorn-aws
```

## 📚 Learning Resources

This project teaches enterprise-level concepts used by companies like:
- Netflix (container orchestration)
- Spotify (multi-environment deployments)
- Airbnb (infrastructure as code)
- Uber (blue-green deployments)

## 🏆 Skills You'll Gain

By completing Phase 2, you'll have learned:
- **DevOps Engineering** fundamentals
- **Container orchestration** in production
- **Multi-environment** deployment strategies
- **Infrastructure as Code** best practices
- **Cost optimization** in cloud environments
- **Monitoring and observability** setup

---

**Ready to start your AWS DevOps journey?** 🚀
