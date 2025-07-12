import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import usePosts from "../hooks/usePosts";

export default function Post() {
  const { id } = useParams();
  const { getPostById } = usePosts();
  const post = getPostById(id);

  if (!post) return <div className="p-6">Post not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <ReactMarkdown className="prose prose-lg">{post.content}</ReactMarkdown>
    </div>
  );
}