import express from 'express';
import { body } from 'express-validator';
import {
  generateUserRoadmap,
  saveRoadmap,
  getSavedRoadmaps,
  deleteSavedRoadmap,
  updateKnownSkills
} from '../controllers/roadmap.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const generateRoadmapValidation = [
  body('careerGoal')
    .notEmpty()
    .withMessage('Career goal is required'),
  body('knownSkills')
    .isArray()
    .withMessage('Known skills must be an array')
];

const saveRoadmapValidation = [
  body('careerGoal')
    .notEmpty()
    .withMessage('Career goal is required'),
  body('roadmap')
    .isObject()
    .withMessage('Roadmap must be an object')
];

const updateSkillsValidation = [
  body('knownSkills')
    .isArray()
    .withMessage('Known skills must be an array')
];

// All routes are protected
router.use(protect);

// Routes
router.post('/generate', generateRoadmapValidation, generateUserRoadmap);
router.post('/save', saveRoadmapValidation, saveRoadmap);
router.get('/saved', getSavedRoadmaps);
router.delete('/saved/:careerGoal', deleteSavedRoadmap);
router.put('/skills', updateSkillsValidation, updateKnownSkills);

export default router; 