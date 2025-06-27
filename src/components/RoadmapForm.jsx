import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { getAllCareerGoals, getAllSkills } from '../utils/roadmapGenerator.js';

export default function RoadmapForm({ onGenerateRoadmap }) {
  const [selectedCareer, setSelectedCareer] = useState('');
  const [knownSkills, setKnownSkills] = useState([]);
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
  const [isSkillsDropdownOpen, setIsSkillsDropdownOpen] = useState(false);

  const careerGoals = getAllCareerGoals();
  const allSkills = getAllSkills();

  const handleSkillToggle = (skill) => {
    setKnownSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCareer) {
      onGenerateRoadmap(selectedCareer, knownSkills);
    }
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Career Roadmap</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Career Goal Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What's your career goal?
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCareerDropdownOpen(!isCareerDropdownOpen)}
              className="input-field flex items-center justify-between"
            >
              <span className={selectedCareer ? 'text-gray-900' : 'text-gray-500'}>
                {selectedCareer || 'Select a career path'}
              </span>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </button>
            
            {isCareerDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                {careerGoals.map((career) => (
                  <button
                    key={career}
                    type="button"
                    onClick={() => {
                      setSelectedCareer(career);
                      setIsCareerDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                  >
                    {career}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Known Skills Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What skills do you already know?
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsSkillsDropdownOpen(!isSkillsDropdownOpen)}
              className="input-field flex items-center justify-between"
            >
              <span className="text-gray-500">
                {knownSkills.length > 0 
                  ? `${knownSkills.length} skill${knownSkills.length > 1 ? 's' : ''} selected`
                  : 'Select your known skills'
                }
              </span>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </button>
            
            {isSkillsDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                {allSkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none flex items-center"
                  >
                    <div className={`w-4 h-4 border rounded mr-3 flex items-center justify-center ${
                      knownSkills.includes(skill) 
                        ? 'bg-primary-600 border-primary-600' 
                        : 'border-gray-300'
                    }`}>
                      {knownSkills.includes(skill) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    {skill}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Selected Skills Display */}
          {knownSkills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {knownSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className="ml-2 text-primary-600 hover:text-primary-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Generate Button */}
        <button
          type="submit"
          disabled={!selectedCareer}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate My Roadmap
        </button>
      </form>
    </div>
  );
} 