import { useState, useEffect } from "react";

const initialPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "**React** is a JavaScript library for building user interfaces...",
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS",
    content: "Tailwind CSS is a *utility-first* CSS framework...",
  },
  {
    id: 3,
    title: "React Router Basics",
    content: "React Router helps you manage **navigation** and rendering...",
  },
];

export default function usePosts() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("blogPosts");
    return saved ? JSON.parse(saved) : initialPosts;
  });

  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (title, content) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPosts([newPost, ...posts]);
  };

  const getPostById = (id) => posts.find((p) => p.id === Number(id));

  return { posts, addPost, getPostById };
}