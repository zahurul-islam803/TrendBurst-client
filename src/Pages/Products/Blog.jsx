import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>TrendBurst - Blogs</title>
      </Helmet>
      <h1 className="mt-8 text-rose-500 text-center text-6xl font-extrabold">
        Blogs
      </h1>
      <p className="text-center text-2xl mb-8 text-rose-400">
        --------------------------------------
      </p>
    </div>
  );
};

export default Blog;