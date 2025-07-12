import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 mb-4 text-white">
      <div className="max-w-3xl mx-auto flex justify-between">
        <Link to="/" className="font-bold">My Blog</Link>
        <Link to="/create" className="hover:underline">Create Post</Link>
      </div>
    </nav>
  );
}