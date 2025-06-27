export const careerPaths = {
  "Frontend Developer": {
    summary: "Frontend developers create the visual and interactive elements of websites and web applications that users see and interact with directly.",
    stages: [
      {
        stage: "Stage 1: Core Web Technologies",
        topics: ["HTML", "CSS", "JavaScript"],
        project: "Build a personal portfolio website with responsive design and basic interactivity"
      },
      {
        stage: "Stage 2: Modern JavaScript & Frameworks",
        topics: ["ES6+", "React", "TypeScript"],
        project: "Create a task management app with React, featuring CRUD operations and local storage"
      },
      {
        stage: "Stage 3: Advanced Frontend Skills",
        topics: ["State Management", "CSS Frameworks", "Build Tools"],
        project: "Develop a full-featured e-commerce frontend with Redux/Zustand and Tailwind CSS"
      },
      {
        stage: "Stage 4: Performance & Optimization",
        topics: ["Performance Optimization", "Testing", "Deployment"],
        project: "Build a high-performance web app with testing suite and CI/CD pipeline"
      }
    ]
  },
  "Backend Developer": {
    summary: "Backend developers build the server-side logic, databases, and APIs that power web applications and handle data processing.",
    stages: [
      {
        stage: "Stage 1: Programming Fundamentals",
        topics: ["Python", "SQL", "Git"],
        project: "Create a simple REST API with Python Flask and SQLite database"
      },
      {
        stage: "Stage 2: Web Development & APIs",
        topics: ["Node.js", "Express.js", "MongoDB"],
        project: "Build a blog API with user authentication and CRUD operations"
      },
      {
        stage: "Stage 3: Advanced Backend Concepts",
        topics: ["Authentication", "Database Design", "API Security"],
        project: "Develop a secure user management system with JWT and password hashing"
      },
      {
        stage: "Stage 4: Scalability & DevOps",
        topics: ["Microservices", "Docker", "Cloud Deployment"],
        project: "Create a microservices architecture deployed on cloud platform"
      }
    ]
  },
  "Full Stack Developer": {
    summary: "Full stack developers work on both frontend and backend, creating complete web applications from database to user interface.",
    stages: [
      {
        stage: "Stage 1: Web Fundamentals",
        topics: ["HTML", "CSS", "JavaScript", "Python"],
        project: "Build a simple full-stack blog with user registration and posts"
      },
      {
        stage: "Stage 2: Modern Stack Development",
        topics: ["React", "Node.js", "Express", "MongoDB"],
        project: "Create a social media clone with real-time features"
      },
      {
        stage: "Stage 3: Advanced Full Stack",
        topics: ["TypeScript", "GraphQL", "Redis", "Testing"],
        project: "Develop a project management tool with real-time collaboration"
      },
      {
        stage: "Stage 4: Production & Scale",
        topics: ["CI/CD", "Cloud Services", "Performance", "Security"],
        project: "Build and deploy a scalable SaaS application"
      }
    ]
  },
  "Data Scientist": {
    summary: "Data scientists analyze complex data sets to help organizations make better decisions through statistical analysis and machine learning.",
    stages: [
      {
        stage: "Stage 1: Data Fundamentals",
        topics: ["Python", "Pandas", "NumPy", "Statistics"],
        project: "Analyze a dataset and create visualizations to find insights"
      },
      {
        stage: "Stage 2: Data Visualization & Analysis",
        topics: ["Matplotlib", "Seaborn", "SQL", "Data Cleaning"],
        project: "Build an interactive dashboard for data exploration"
      },
      {
        stage: "Stage 3: Machine Learning",
        topics: ["Scikit-learn", "Machine Learning Algorithms", "Model Evaluation"],
        project: "Create a predictive model for real-world data"
      },
      {
        stage: "Stage 4: Advanced ML & Deployment",
        topics: ["Deep Learning", "MLOps", "Model Deployment"],
        project: "Deploy a machine learning model as a web service"
      }
    ]
  },
  "DevOps Engineer": {
    summary: "DevOps engineers bridge development and operations, automating deployment processes and managing infrastructure as code.",
    stages: [
      {
        stage: "Stage 1: Infrastructure Basics",
        topics: ["Linux", "Networking", "Shell Scripting", "Git"],
        project: "Set up a basic web server and automate deployment scripts"
      },
      {
        stage: "Stage 2: Containerization & Orchestration",
        topics: ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms"],
        project: "Containerize an application and deploy to Kubernetes cluster"
      },
      {
        stage: "Stage 3: Infrastructure as Code",
        topics: ["Terraform", "Ansible", "Monitoring", "Logging"],
        project: "Automate infrastructure provisioning and monitoring setup"
      },
      {
        stage: "Stage 4: Advanced DevOps",
        topics: ["Microservices", "Security", "Performance", "Disaster Recovery"],
        project: "Build a complete CI/CD pipeline with security scanning"
      }
    ]
  }
};

export const freeResources = {
  "HTML": "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  "CSS": "https://developer.mozilla.org/en-US/docs/Learn/CSS",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "React": "https://react.dev/learn",
  "TypeScript": "https://www.typescriptlang.org/docs/",
  "Python": "https://docs.python.org/3/tutorial/",
  "Node.js": "https://nodejs.org/en/docs/",
  "Express.js": "https://expressjs.com/",
  "MongoDB": "https://docs.mongodb.com/",
  "SQL": "https://www.w3schools.com/sql/",
  "Git": "https://git-scm.com/doc",
  "Docker": "https://docs.docker.com/",
  "Kubernetes": "https://kubernetes.io/docs/",
  "Terraform": "https://www.terraform.io/docs",
  "Pandas": "https://pandas.pydata.org/docs/",
  "NumPy": "https://numpy.org/doc/",
  "Scikit-learn": "https://scikit-learn.org/stable/",
  "Matplotlib": "https://matplotlib.org/",
  "Seaborn": "https://seaborn.pydata.org/",
  "ES6+": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  "State Management": "https://redux.js.org/introduction/getting-started",
  "CSS Frameworks": "https://tailwindcss.com/docs",
  "Build Tools": "https://webpack.js.org/concepts/",
  "Performance Optimization": "https://web.dev/performance/",
  "Testing": "https://jestjs.io/docs/getting-started",
  "Deployment": "https://vercel.com/docs",
  "Authentication": "https://auth0.com/docs",
  "Database Design": "https://www.postgresql.org/docs/",
  "API Security": "https://owasp.org/www-project-api-security/",
  "Microservices": "https://microservices.io/",
  "Cloud Deployment": "https://aws.amazon.com/getting-started/",
  "Statistics": "https://www.khanacademy.org/math/statistics-probability",
  "Data Cleaning": "https://pandas.pydata.org/docs/user_guide/missing_data.html",
  "Machine Learning Algorithms": "https://scikit-learn.org/stable/supervised_learning.html",
  "Model Evaluation": "https://scikit-learn.org/stable/modules/model_evaluation.html",
  "Deep Learning": "https://pytorch.org/tutorials/",
  "MLOps": "https://mlops.community/",
  "Model Deployment": "https://mlflow.org/docs/latest/index.html",
  "Linux": "https://www.linux.org/docs/",
  "Networking": "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html",
  "Shell Scripting": "https://www.gnu.org/software/bash/manual/",
  "CI/CD": "https://www.jenkins.io/doc/",
  "Cloud Platforms": "https://aws.amazon.com/getting-started/",
  "Ansible": "https://docs.ansible.com/",
  "Monitoring": "https://prometheus.io/docs/",
  "Logging": "https://www.elastic.co/guide/index.html",
  "Security": "https://owasp.org/",
  "Performance": "https://web.dev/performance/",
  "Disaster Recovery": "https://aws.amazon.com/disaster-recovery/"
}; 