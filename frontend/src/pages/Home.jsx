import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to ChatApp</h1>
      <p className="text-lg text-gray-400 mb-6">
        Connect and chat with people in real time.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
