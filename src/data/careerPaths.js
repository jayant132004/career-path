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
  "HTML": {
    docs: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
    youtube: "https://www.youtube.com/watch?v=UB1O30fR-EE"
  },
  "CSS": {
    docs: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
    youtube: "https://www.youtube.com/watch?v=yfoY53QXEnI"
  },
  "JavaScript": {
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    youtube: "https://www.youtube.com/watch?v=W6NZfCO5SIk"
  },
  "React": {
    docs: "https://react.dev/learn",
    youtube: "https://www.youtube.com/watch?v=bMknfKXIFA8"
  },
  "TypeScript": {
    docs: "https://www.typescriptlang.org/docs/",
    youtube: "https://www.youtube.com/watch?v=BwuLxPH8IDs"
  },
  "Python": {
    docs: "https://docs.python.org/3/tutorial/",
    youtube: "https://www.youtube.com/watch?v=_uQrJ0TkZlc"
  },
  "Node.js": {
    docs: "https://nodejs.org/en/docs/",
    youtube: "https://www.youtube.com/watch?v=Oe421EPjeBE"
  },
  "Express.js": {
    docs: "https://expressjs.com/",
    youtube: "https://www.youtube.com/watch?v=L72fhGm1tfE"
  },
  "MongoDB": {
    docs: "https://docs.mongodb.com/",
    youtube: "https://www.youtube.com/watch?v=pWbMrx5rVBE"
  },
  "SQL": {
    docs: "https://www.w3schools.com/sql/",
    youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY"
  },
  "Git": {
    docs: "https://git-scm.com/doc",
    youtube: "https://www.youtube.com/watch?v=SWYqp7iY_TQ"
  },
  "Docker": {
    docs: "https://docs.docker.com/",
    youtube: "https://www.youtube.com/watch?v=fqMOX6JJhGo"
  },
  "Kubernetes": {
    docs: "https://kubernetes.io/docs/",
    youtube: "https://www.youtube.com/watch?v=B53sG0VLxNQ"
  },
  "Terraform": {
    docs: "https://www.terraform.io/docs",
    youtube: "https://www.youtube.com/watch?v=SLB_c_ayRMo"
  },
  "Pandas": {
    docs: "https://pandas.pydata.org/docs/",
    youtube: "https://www.youtube.com/watch?v=dcqPhpY7tWk"
  },
  "NumPy": {
    docs: "https://numpy.org/doc/",
    youtube: "https://www.youtube.com/watch?v=QUT1VHiLmmI"
  },
  "Scikit-learn": {
    docs: "https://scikit-learn.org/stable/",
    youtube: "https://www.youtube.com/watch?v=0B5eIE_1vpU"
  },
  "Matplotlib": {
    docs: "https://matplotlib.org/",
    youtube: "https://www.youtube.com/watch?v=3Xc3CA655Y4"
  },
  "Seaborn": {
    docs: "https://seaborn.pydata.org/",
    youtube: "https://www.youtube.com/watch?v=6GUZXDef2U0"
  },
  "ES6+": {
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    youtube: "https://www.youtube.com/watch?v=NCwa_xi0Uuc"
  },
  "State Management": {
    docs: "https://redux.js.org/introduction/getting-started",
    youtube: "https://www.youtube.com/watch?v=CVpUuw9XSjY"
  },
  "CSS Frameworks": {
    docs: "https://tailwindcss.com/docs",
    youtube: "https://www.youtube.com/watch?v=4wGmylzf-gU"
  },
  "Build Tools": {
    docs: "https://webpack.js.org/concepts/",
    youtube: "https://www.youtube.com/watch?v=GU-2T7k9NfI"
  },
  "Performance Optimization": {
    docs: "https://web.dev/performance/",
    youtube: "https://www.youtube.com/watch?v=exB0WbqRhyQ"
  },
  "Testing": {
    docs: "https://jestjs.io/docs/getting-started",
    youtube: "https://www.youtube.com/watch?v=7rTTxqa2imA"
  },
  "Deployment": {
    docs: "https://vercel.com/docs",
    youtube: "https://www.youtube.com/watch?v=1ZoOAq1g6oo"
  },
  "Authentication": {
    docs: "https://auth0.com/docs",
    youtube: "https://www.youtube.com/watch?v=wAeV6Lx_CDE"
  },
  "Database Design": {
    docs: "https://www.postgresql.org/docs/",
    youtube: "https://www.youtube.com/watch?v=ztHopE5Wnpc"
  },
  "API Security": {
    docs: "https://owasp.org/www-project-api-security/",
    youtube: "https://www.youtube.com/watch?v=2pIJoPkh9IU"
  },
  "Microservices": {
    docs: "https://microservices.io/",
    youtube: "https://www.youtube.com/watch?v=j6ow-UemzBc"
  },
  "Cloud Deployment": {
    docs: "https://aws.amazon.com/getting-started/",
    youtube: "https://www.youtube.com/watch?v=Ia-UEYYR44s"
  },
  "Statistics": {
    docs: "https://www.khanacademy.org/math/statistics-probability",
    youtube: "https://www.youtube.com/watch?v=xxpc-HPKN28"
  },
  "Data Cleaning": {
    docs: "https://pandas.pydata.org/docs/user_guide/missing_data.html",
    youtube: "https://www.youtube.com/watch?v=K19dN_wXjWo"
  },
  "Machine Learning Algorithms": {
    docs: "https://scikit-learn.org/stable/supervised_learning.html",
    youtube: "https://www.youtube.com/watch?v=KNAWp2S3w94"
  },
  "Model Evaluation": {
    docs: "https://scikit-learn.org/stable/modules/model_evaluation.html",
    youtube: "https://www.youtube.com/watch?v=85dtiMz9tSo"
  },
  "Deep Learning": {
    docs: "https://pytorch.org/tutorials/",
    youtube: "https://www.youtube.com/watch?v=VyWAvY2CF3c"
  },
  "MLOps": {
    docs: "https://mlops.community/",
    youtube: "https://www.youtube.com/watch?v=9BgIDqAzfuA"
  },
  "Model Deployment": {
    docs: "https://mlflow.org/docs/latest/index.html",
    youtube: "https://www.youtube.com/watch?v=6gdzJ9Sa98g"
  },
  "Linux": {
    docs: "https://www.linux.org/docs/",
    youtube: "https://www.youtube.com/watch?v=ROjZy1WbCIA"
  },
  "Networking": {
    docs: "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html",
    youtube: "https://www.youtube.com/watch?v=qiQR5rTSshw"
  },
  "Shell Scripting": {
    docs: "https://www.gnu.org/software/bash/manual/",
    youtube: "https://www.youtube.com/watch?v=v-F3YLd6oMw"
  },
  "CI/CD": {
    docs: "https://www.jenkins.io/doc/",
    youtube: "https://www.youtube.com/watch?v=1er2cjUq1UI"
  },
  "Cloud Platforms": {
    docs: "https://aws.amazon.com/getting-started/",
    youtube: "https://www.youtube.com/watch?v=Ia-UEYYR44s"
  },
  "Ansible": {
    docs: "https://docs.ansible.com/",
    youtube: "https://www.youtube.com/watch?v=fHO1X93e4WA"
  },
  "Monitoring": {
    docs: "https://prometheus.io/docs/",
    youtube: "https://www.youtube.com/watch?v=h4Sl21AKiDg"
  },
  "Logging": {
    docs: "https://www.elastic.co/guide/index.html",
    youtube: "https://www.youtube.com/watch?v=9SIjoeRe93w"
  },
  "Security": {
    docs: "https://owasp.org/",
    youtube: "https://www.youtube.com/watch?v=2pIJoPkh9IU"
  },
  "Performance": {
    docs: "https://web.dev/performance/",
    youtube: "https://www.youtube.com/watch?v=exB0WbqRhyQ"
  },
  "Disaster Recovery": {
    docs: "https://aws.amazon.com/disaster-recovery/",
    youtube: "https://www.youtube.com/watch?v=8jLOlo1Tg8Y"
  }
}; 