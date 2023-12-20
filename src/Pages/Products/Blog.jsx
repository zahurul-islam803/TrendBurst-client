import { Helmet } from "react-helmet-async";
import BlogCard from "./BlogCard";

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
      <div>
        <p className="text-center mb-8">This is a Fashion Blog section. Chose and collect this item.</p>
        <BlogCard></BlogCard>
      </div>
    </div>
  );
};

export default Blog;