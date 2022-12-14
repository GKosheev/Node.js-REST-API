import express from 'express';
import {
  getPosts,
  getPost,
  updatePost,
  deletePost,
  addPost,
} from '../controllers/posts.controller';

const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', addPost);
router.get('/posts/:id', getPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;
