import { validationResult } from 'express-validator';
import User from '../models/User.js';
import { generateRoadmap } from '../../src/utils/roadmapGenerator.js';

// @desc    Generate roadmap
// @route   POST /api/roadmap/generate
// @access  Private
export const generateUserRoadmap = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { careerGoal, knownSkills } = req.body;

    // Generate roadmap
    const roadmap = generateRoadmap(careerGoal, knownSkills);

    res.status(200).json({
      success: true,
      roadmap
    });
  } catch (error) {
    console.error('Generate roadmap error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error'
    });
  }
};

// @desc    Save roadmap
// @route   POST /api/roadmap/save
// @access  Private
export const saveRoadmap = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { careerGoal, roadmap } = req.body;

    const user = await User.findById(req.user.id);
    
    // Check if roadmap already exists for this career goal
    const existingRoadmapIndex = user.savedRoadmaps.findIndex(
      saved => saved.careerGoal === careerGoal
    );

    if (existingRoadmapIndex !== -1) {
      // Update existing roadmap
      user.savedRoadmaps[existingRoadmapIndex].roadmap = roadmap;
      user.savedRoadmaps[existingRoadmapIndex].createdAt = new Date();
    } else {
      // Add new roadmap
      user.savedRoadmaps.push({
        careerGoal,
        roadmap,
        createdAt: new Date()
      });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Roadmap saved successfully',
      savedRoadmaps: user.savedRoadmaps
    });
  } catch (error) {
    console.error('Save roadmap error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get saved roadmaps
// @route   GET /api/roadmap/saved
// @access  Private
export const getSavedRoadmaps = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    res.status(200).json({
      success: true,
      savedRoadmaps: user.savedRoadmaps
    });
  } catch (error) {
    console.error('Get saved roadmaps error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete saved roadmap
// @route   DELETE /api/roadmap/saved/:careerGoal
// @access  Private
export const deleteSavedRoadmap = async (req, res) => {
  try {
    const { careerGoal } = req.params;

    const user = await User.findById(req.user.id);
    
    user.savedRoadmaps = user.savedRoadmaps.filter(
      roadmap => roadmap.careerGoal !== careerGoal
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Roadmap deleted successfully',
      savedRoadmaps: user.savedRoadmaps
    });
  } catch (error) {
    console.error('Delete roadmap error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update known skills
// @route   PUT /api/roadmap/skills
// @access  Private
export const updateKnownSkills = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { knownSkills } = req.body;

    const user = await User.findById(req.user.id);
    user.knownSkills = knownSkills;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Skills updated successfully',
      knownSkills: user.knownSkills
    });
  } catch (error) {
    console.error('Update skills error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}; 