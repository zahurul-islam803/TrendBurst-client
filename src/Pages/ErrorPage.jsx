import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h4 className="card-title md:text-6xl text-2xl font-extrabold">
              Sorry For The Inconvenience.
            </h4>
            <p className="text-xl font-semibold py-2">
              The page you are looking for was not found.
            </p>
            <p>Search again what you are looking for</p>
            <div className="card-actions justify-end">
              <Link to={"/"}>
                <button className="border-none btn btn-outline bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-transparent p-4 rounded-badge">
                 Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;