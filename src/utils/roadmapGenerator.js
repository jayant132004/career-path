import { careerPaths, freeResources } from '../data/careerPaths.js';

export function generateRoadmap(careerGoal, knownSkills = []) {
  const careerPath = careerPaths[careerGoal];
  
  if (!careerPath) {
    throw new Error(`Career path "${careerGoal}" not found`);
  }

  // Filter out known skills from each stage
  const filteredStages = careerPath.stages.map(stage => ({
    ...stage,
    topics: stage.topics.filter(topic => !knownSkills.includes(topic))
  })).filter(stage => stage.topics.length > 0); // Remove empty stages

  // Filter free resources to only include topics in the learning path
  const relevantResources = {};
  filteredStages.forEach(stage => {
    stage.topics.forEach(topic => {
      if (freeResources[topic]) {
        relevantResources[topic] = freeResources[topic];
      }
    });
  });

  return {
    career_summary: careerPath.summary,
    learning_path: filteredStages,
    free_resources: relevantResources
  };
}

export function getAllCareerGoals() {
  return Object.keys(careerPaths);
}

export function getAllSkills() {
  const allSkills = new Set();
  Object.values(careerPaths).forEach(path => {
    path.stages.forEach(stage => {
      stage.topics.forEach(topic => allSkills.add(topic));
    });
  });
  return Array.from(allSkills).sort();
} 