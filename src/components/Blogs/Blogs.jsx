import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "./Blog";
import { useEffect } from "react";
const Blogs = () => {
  // define a state
  const [blogs, setBlogs] = useState([]);
  // define useEffect
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const URL = "api/blogs.json";
        const request = await fetch(URL);
        const data = await request.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    getBlogs();
  }, []);

  return (
    <>
      <div className="blogs  lg:w-2/3 md:w-2/4 ">
        <div className="blogs   ">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </>
  );
};
Blogs.propTypes = {
  blog: PropTypes.array.isRequired,
};
export default Blogs;
