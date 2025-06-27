import React from 'react';
import { ExternalLink, BookOpen, Code, Target, Youtube, FileText } from 'lucide-react';

export default function RoadmapDisplay({ roadmap, onBack }) {
  if (!roadmap) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <button
          onClick={onBack}
          className="btn-secondary mb-4"
        >
          ← Back to Form
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Learning Roadmap</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {roadmap.career_summary}
        </p>
      </div>

      {/* Learning Path */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Target className="w-6 h-6 mr-2 text-primary-600" />
          Learning Path
        </h2>
        
        <div className="space-y-6">
          {roadmap.learning_path.map((stage, index) => (
            <div key={index} className="card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {stage.stage}
                  </h3>
                  
                  {/* Topics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Skills to Learn:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {stage.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Code className="w-4 h-4 mr-1" />
                      Project:
                    </h4>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                      {stage.project}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Resources */}
      {Object.keys(roadmap.free_resources).length > 0 && (
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Free Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(roadmap.free_resources).map(([topic, resources]) => (
              <div key={topic} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">{topic}</h3>
                <div className="space-y-2">
                  {/* Documentation Link */}
                  <a
                    href={resources.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-800">Documentation</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </a>
                  
                  {/* YouTube Link */}
                  <a
                    href={resources.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 bg-red-50 hover:bg-red-100 rounded-md transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <Youtube className="w-4 h-4 text-red-600 mr-2" />
                      <span className="text-sm font-medium text-red-800">Video Tutorial</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-red-600" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* JSON Export */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Roadmap Data (JSON)</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            {JSON.stringify(roadmap, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
} 