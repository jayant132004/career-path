# Career Roadmap Planner - Full Stack Application

A modern full-stack web application that generates personalized learning roadmaps based on your career goals and current skills. Built with React, Node.js, Express, MongoDB, and featuring complete authentication with email verification.

## 🚀 Features

### **Authentication & User Management**
- ✅ **User Registration** with email verification
- ✅ **Secure Login/Logout** with JWT tokens
- ✅ **Password Reset** functionality
- ✅ **Email Verification** for new accounts
- ✅ **Protected Routes** and user sessions

### **Roadmap Generation**
- ✅ **Personalized Roadmaps** based on career goals and current skills
- ✅ **Skill Filtering** - only shows topics you haven't mastered
- ✅ **Project Suggestions** for each learning stage
- ✅ **Free Learning Resources** - documentation and YouTube links
- ✅ **Save & Manage** multiple roadmaps

### **Career Paths Supported**
- **Frontend Developer** - HTML, CSS, JavaScript, React, TypeScript
- **Backend Developer** - Python, Node.js, databases, APIs
- **Full Stack Developer** - Complete web development skills
- **Data Scientist** - Python, statistics, machine learning
- **DevOps Engineer** - Infrastructure, automation, cloud platforms

## 🛠️ Tech Stack

### **Frontend**
- **React 18** with modern hooks
- **Vite** for fast development and building
- **Tailwind CSS** for beautiful styling
- **Lucide React** for icons
- **JWT Authentication** with localStorage

### **Backend**
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Nodemailer** for email services
- **bcryptjs** for password hashing
- **Express Validator** for input validation

### **Security Features**
- **Helmet** for security headers
- **Rate Limiting** to prevent abuse
- **CORS** configuration
- **Input Validation** and sanitization
- **Password Hashing** with bcrypt

## 📋 Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Email Service** (Gmail or other SMTP provider)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/jayant132004/career-path.git
cd career-path
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/career-roadmap
# For production: mongodb+srv://username:password@cluster.mongodb.net/career-roadmap

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com

# Frontend URL
CLIENT_URL=http://localhost:3000
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Windows
net start MongoDB

# On Linux
sudo systemctl start mongod
```

### 5. Start the Application
```bash
# Development (runs both frontend and backend)
npm run dev

# Or run separately:
npm run server  # Backend on port 5000
npm run client  # Frontend on port 3000
```

### 6. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## 📧 Email Setup

### Gmail Configuration
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use the generated password in your `.env` file

### Other Email Providers
Update the email configuration in `.env` for your preferred provider:
```env
EMAIL_HOST=your-smtp-host
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
EMAIL_FROM=your-email@domain.com
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify-email` - Email verification
- `POST /api/auth/forgot-password` - Password reset request
- `PUT /api/auth/reset-password` - Password reset
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - User logout (protected)

### Roadmaps
- `POST /api/roadmap/generate` - Generate roadmap (protected)
- `POST /api/roadmap/save` - Save roadmap (protected)
- `GET /api/roadmap/saved` - Get saved roadmaps (protected)
- `DELETE /api/roadmap/saved/:careerGoal` - Delete roadmap (protected)
- `PUT /api/roadmap/skills` - Update known skills (protected)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred platform

### Backend Deployment (Railway/Render/Heroku)
1. Set up environment variables on your hosting platform
2. Deploy the server folder
3. Update the frontend API base URL

### Database Deployment
- Use MongoDB Atlas for cloud database
- Update `MONGODB_URI` in environment variables

## 📁 Project Structure

```
├── src/                    # Frontend source code
│   ├── components/         # React components
│   │   ├── Auth/          # Authentication components
│   │   ├── RoadmapForm.jsx
│   │   └── RoadmapDisplay.jsx
│   ├── data/              # Career path data
│   ├── utils/             # Utility functions
│   └── App.jsx            # Main app component
├── server/                # Backend source code
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   └── index.js           # Server entry point
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🔒 Security Features

- **JWT Authentication** with secure token storage
- **Password Hashing** using bcrypt
- **Email Verification** for new accounts
- **Rate Limiting** to prevent abuse
- **Input Validation** and sanitization
- **CORS** configuration for cross-origin requests
- **Security Headers** with Helmet

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or need help:
1. Check the [Issues](https://github.com/jayant132004/career-path/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

## 🎯 Roadmap Features

- [ ] Progress tracking for learning stages
- [ ] Social features and sharing
- [ ] Advanced analytics and insights
- [ ] Mobile app development
- [ ] Integration with learning platforms
- [ ] AI-powered skill assessment 