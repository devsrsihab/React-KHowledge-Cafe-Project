import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { title, author, publish_date, hashtags, reading_time } = blog;
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
              <div className="icon text-black  text-3xl ">❤</div>
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
            <button className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
