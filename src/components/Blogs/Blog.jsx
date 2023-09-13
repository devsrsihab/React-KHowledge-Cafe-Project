import PropTypes from "prop-types";
import { useState } from "react";
const Blog = ({ blog, handlerBookmark, handlerMarkread }) => {
  const { title, author, publish_date, hashtags, reading_time } = blog;
  // define a bookmark active state
  const [isBookmark, setIsBookmark] = useState(false);
  // is bookmark handler
  const handlerIsBokkmerActive = (isActice) => {
    setIsBookmark(isActice);
  };
  return (
    <>
      <div className="card bg-white shadow-xl my-5">
        <figure>
          <img src="" alt={title + "-image"} />
        </figure>
        <div className="card-body px-4 py-4">
          <div className="author sm:flex justify-between items-center ">
            <div className="left-side sm:flex  items-center gap-5">
              <img
                className="rounded-full w-14	  md:w-10	"
                src={author.img}
                alt=""
              />
              <div className="author-content capitalize">
                <h2 className="sm:text-2xl text-[#111111] font-bold">
                  {author.name}
                </h2>
                <h3 className="text-[#11111199] text-xs sm:text-base ">
                  {publish_date}
                </h3>
              </div>
            </div>

            <div className="right-side flex gap-4 sm:justify-start justify-between items-center sm:text-xl text-[#11111199] ">
              <h2>{reading_time} min read </h2>
              <div
                onClick={() => {
                  handlerBookmark(blog);
                  handlerIsBokkmerActive(true);
                }}
                className={
                  isBookmark
                    ? " btn bg-white border-none hover:bg-white text-red-500  text-3xl "
                    : "btn bg-white border-none hover:bg-white text-black  text-3xl "
                }
              >
                ❤
              </div>
            </div>
          </div>

          <h2 className="text-lg sm:mi-0 mt-5  md:text-2xl lg:text-4xl   text-[#111] font-bold ">
            {" "}
            {title}{" "}
          </h2>
          <div className="hastag flex gap-3">
            {hashtags.map((tag, id) => (
              <h4 key={id}>{tag}</h4>
            ))}
          </div>
          <div className="card-actions my-5">
            <button
              onClick={() => handlerMarkread(reading_time)}
              className="btn btn-primary"
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handlerBookmark: PropTypes.func,
  isBookmark: PropTypes.bool,
  handlerMarkread: PropTypes.func,
};

export default Blog;
