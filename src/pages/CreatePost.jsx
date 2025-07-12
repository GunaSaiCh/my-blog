import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePosts from "../hooks/usePosts";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addPost } = usePosts();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content (Markdown supported)"
          className="w-full p-2 border rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Publish
        </button>
      </form>
    </div>
  );
}