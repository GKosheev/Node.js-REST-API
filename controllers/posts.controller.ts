/** source/controllers/posts.ts */
import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
  userId: Number;
  id: Number;
  title: String;
  body: String;
}

export async function getPosts(req: Request, res: Response) {
  try {
    let response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      },
    );
    let posts: Post[] = response.data;
    return res.status(200).json({
      msg: posts,
    });
  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}

export async function addPost(req: Request, res: Response) {
  try {
    const { title, body } = req.body;
    let response: AxiosResponse = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title,
        body,
      },
    );
    return res.status(200).json({
      msg: response.data,
    });
  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}

export async function getPost(req: Request, res: Response) {
  try {
    let id = req.params.id;
    let result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    let post: Post = result.data;
    return res.status(200).json({
      msg: post,
    });
  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}

export async function updatePost(req: Request, res: Response) {
  try {
    let id = req.params.id;
    const { title, body } = req.body;
    let response: AxiosResponse = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        title,
        body,
      },
    );
    return res.status(200).json({
      msg: response.data,
    });
  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}

export async function deletePost(req: Request, res: Response) {
  try {
    let id: string = req.params.id;
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.status(200).json({
      msg: 'post deleted',
    });
  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}
