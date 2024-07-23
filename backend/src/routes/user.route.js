import express from 'express';
import { deleteProfile, loginUser, registerUser, updateProfile } from '../controller/user.controller.js';
import { loginGoogle } from '../controller/google.controller.js';
import { verifyToken } from '../middleware/index.js';

const router = express.Router();



router.post('/register', registerUser);
router.post('/login',loginUser);
router.post('/google-login',loginGoogle);
router.put('/profile',verifyToken,updateProfile);
router.delete('/profile',verifyToken,deleteProfile);



export default router;