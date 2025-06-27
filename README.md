# Career Roadmap Planner

A modern web application that generates personalized learning roadmaps based on your career goals and current skills. Built with React, Vite, and Tailwind CSS.

## Features

- **Personalized Roadmaps**: Generate step-by-step learning paths based on your career goal
- **Skill Filtering**: Only shows topics you haven't already mastered
- **Project Suggestions**: Get hands-on project ideas for each learning stage
- **Free Resources**: Curated links to free learning materials (YouTube, official docs)
- **Beautiful UI**: Modern, responsive design with excellent user experience
- **JSON Export**: Get your roadmap data in structured JSON format

## Supported Career Paths

- **Frontend Developer**: HTML, CSS, JavaScript, React, and more
- **Backend Developer**: Python, Node.js, databases, APIs
- **Full Stack Developer**: Complete web development skills
- **Data Scientist**: Python, statistics, machine learning
- **DevOps Engineer**: Infrastructure, automation, cloud platforms

## Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd career-roadmap-planner
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Usage

1. **Select Your Career Goal**: Choose from the available career paths
2. **Mark Known Skills**: Select skills you already have
3. **Generate Roadmap**: Get your personalized learning path
4. **Follow the Stages**: Work through each stage systematically
5. **Complete Projects**: Build the suggested projects to reinforce learning
6. **Use Free Resources**: Access the curated learning materials

## Example Output

For a user with career goal "Frontend Developer" and known skills ["HTML", "CSS"], the app generates:

```json
{
  "career_summary": "Frontend developers create the visual and interactive elements of websites and web applications that users see and interact with directly.",
  "learning_path": [
    {
      "stage": "Stage 1: Core Web Technologies",
      "topics": ["JavaScript"],
      "project": "Build a personal portfolio website with responsive design and basic interactivity"
    },
    {
      "stage": "Stage 2: Modern JavaScript & Frameworks",
      "topics": ["ES6+", "React", "TypeScript"],
      "project": "Create a task management app with React, featuring CRUD operations and local storage"
    }
  ],
  "free_resources": {
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "React": "https://react.dev/learn",
    "TypeScript": "https://www.typescriptlang.org/docs/"
  }
}
```

## Project Structure

```
src/
├── components/
│   ├── RoadmapForm.jsx      # Form for user input
│   └── RoadmapDisplay.jsx   # Roadmap visualization
├── data/
│   └── careerPaths.js       # Career path definitions
├── utils/
│   └── roadmapGenerator.js  # Roadmap generation logic
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
└── index.css               # Global styles
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **JavaScript ES6+**: Modern JavaScript features

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

 