import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Expense Tracker App</h1>
      <Link
        to="/app"
        className="py-3 px-6 text-white bg-purple-500 rounded-md hover:bg-purple-600 transition duration-300"
      >
        Goto App
      </Link>
    </div>
  );
}

export default Homepage;
