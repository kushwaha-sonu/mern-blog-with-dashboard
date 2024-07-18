import express from 'express';
import { verifyToken } from '../middleware/index.js';
import { createBlog } from '../controller/blog.controller.js';

const router = express.Router();




router.post('/create-blog',verifyToken, createBlog);
// router.get('/', getBlogs);
// router.get('/:id', getBlog);
// router.put('/:id', updateBlog);
// router.delete('/:id', deleteBlog);


export default router;