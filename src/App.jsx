import React, { useState, useEffect } from 'react';
import { Map, User, LogOut, Save, BookOpen } from 'lucide-react';
import RoadmapForm from './components/RoadmapForm.jsx';
import RoadmapDisplay from './components/RoadmapDisplay.jsx';
import LoginForm from './components/Auth/LoginForm.jsx';
import RegisterForm from './components/Auth/RegisterForm.jsx';
import { generateRoadmap } from './utils/roadmapGenerator.js';

function App() {
  const [roadmap, setRoadmap] = useState(null);
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState('login'); // 'login', 'register', 'forgot-password'
  const [loading, setLoading] = useState(true);
  const [savedRoadmaps, setSavedRoadmaps] = useState([]);

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async (token) => {
    try {
      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setSavedRoadmaps(data.user.savedRoadmaps || []);
      } else {
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setAuthMode('login');
  };

  const handleRegister = (userData, message) => {
    setUser(userData);
    setAuthMode('login');
    // Show email verification message
    alert(message);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setRoadmap(null);
    setSavedRoadmaps([]);
  };

  const handleGenerateRoadmap = async (careerGoal, knownSkills) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Generate roadmap without saving if not logged in
        const generatedRoadmap = generateRoadmap(careerGoal, knownSkills);
        setRoadmap(generatedRoadmap);
        return;
      }

      // Generate roadmap via API and save it
      const response = await fetch('/api/roadmap/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ careerGoal, knownSkills })
      });

      const data = await response.json();
      if (data.success) {
        setRoadmap(data.roadmap);
        
        // Save the roadmap
        await saveRoadmap(careerGoal, data.roadmap);
      }
    } catch (error) {
      console.error('Error generating roadmap:', error);
      alert('Error generating roadmap. Please try again.');
    }
  };

  const saveRoadmap = async (careerGoal, roadmapData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/roadmap/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ careerGoal, roadmap: roadmapData })
      });

      const data = await response.json();
      if (data.success) {
        setSavedRoadmaps(data.savedRoadmaps);
      }
    } catch (error) {
      console.error('Error saving roadmap:', error);
    }
  };

  const loadSavedRoadmap = (savedRoadmap) => {
    setRoadmap(savedRoadmap.roadmap);
  };

  const deleteSavedRoadmap = async (careerGoal) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/roadmap/saved/${encodeURIComponent(careerGoal)}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (data.success) {
        setSavedRoadmaps(data.savedRoadmaps);
      }
    } catch (error) {
      console.error('Error deleting roadmap:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show authentication forms if not logged in
  if (!user) {
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
          {authMode === 'login' && (
            <LoginForm
              onLogin={handleLogin}
              onSwitchToRegister={() => setAuthMode('register')}
              onSwitchToForgotPassword={() => setAuthMode('forgot-password')}
            />
          )}
          {authMode === 'register' && (
            <RegisterForm
              onRegister={handleRegister}
              onSwitchToLogin={() => setAuthMode('login')}
            />
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

  // Main app interface for logged-in users
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
            
            <div className="flex items-center space-x-4">
              {/* User Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  <User className="w-5 h-5" />
                  <span>{user.name}</span>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      {user.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {roadmap ? (
          <RoadmapDisplay roadmap={roadmap} onBack={() => setRoadmap(null)} />
        ) : (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome back, {user.name}! 👋
              </h2>
              <p className="text-lg text-gray-600">
                Ready to continue your learning journey?
              </p>
            </div>

            {/* Saved Roadmaps */}
            {savedRoadmaps.length > 0 && (
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Save className="w-5 h-5 mr-2 text-primary-600" />
                  Your Saved Roadmaps
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {savedRoadmaps.map((saved, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-2">{saved.careerGoal}</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Created: {new Date(saved.createdAt).toLocaleDateString()}
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => loadSavedRoadmap(saved)}
                          className="btn-primary text-sm px-3 py-1"
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteSavedRoadmap(saved.careerGoal)}
                          className="btn-secondary text-sm px-3 py-1"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Create New Roadmap */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary-600" />
                Create New Roadmap
              </h3>
              <RoadmapForm onGenerateRoadmap={handleGenerateRoadmap} />
            </div>
          </div>
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