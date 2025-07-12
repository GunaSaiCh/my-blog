import { Link } from "react-router-dom";
import usePosts from "../hooks/usePosts";

export default function Home() {
  const { posts } = usePosts();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recent Posts</h1>
      {posts.map((post) => (
        <Link
          to={`/post/${post.id}`}
          key={post.id}
          className="block mb-4 p-4 bg-white rounded-xl shadow hover:bg-gray-100"
        >
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600 truncate">{post.content}</p>
        </Link>
      ))}
    </div>
  );
}