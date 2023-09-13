import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "./Blog";
import { useEffect } from "react";
const Blogs = ({ handlerBookmark }) => {
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
            <Blog
              handlerBookmark={handlerBookmark}
              key={blog.id}
              blog={blog}
            ></Blog>
          ))}
        </div>
      </div>
    </>
  );
};
Blogs.propTypes = {
  blog: PropTypes.array,
  handlerBookmark: PropTypes.func.isRequired,
};
export default Blogs;
