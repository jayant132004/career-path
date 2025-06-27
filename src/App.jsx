import React, { useState } from 'react';
import { Map } from 'lucide-react';
import RoadmapForm from './components/RoadmapForm.jsx';
import RoadmapDisplay from './components/RoadmapDisplay.jsx';
import { generateRoadmap } from './utils/roadmapGenerator.js';

function App() {
  const [roadmap, setRoadmap] = useState(null);

  const handleGenerateRoadmap = (careerGoal, knownSkills) => {
    try {
      const generatedRoadmap = generateRoadmap(careerGoal, knownSkills);
      setRoadmap(generatedRoadmap);
    } catch (error) {
      console.error('Error generating roadmap:', error);
      alert('Error generating roadmap. Please try again.');
    }
  };

  const handleBack = () => {
    setRoadmap(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Map className="w-8 h-8 text-primary-600" />
              <h1 className="text-xl font-bold text-gray-900">Career Roadmap Planner</h1>
            </div>
            <p className="text-sm text-gray-500">Your personalized learning journey</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {roadmap ? (
          <RoadmapDisplay roadmap={roadmap} onBack={handleBack} />
        ) : (
          <RoadmapForm onGenerateRoadmap={handleGenerateRoadmap} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>Built with ❤️ to help you achieve your career goals</p>
            <p className="text-sm mt-2">
              Get personalized learning roadmaps based on your current skills and career aspirations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 