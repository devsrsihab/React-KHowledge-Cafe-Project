import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, markread }) => {
  return (
    <>
      <div className=" lg:w-1/3 md:w-2/4 ml-5">
        <div className="bookmark-counter bg-[#6047EC1A] h-[2.5rem] p-10 text-2xl font-bold text-[#6047EC] flex flex-col items-center md:justify-center border border-[#6047EC] ">
          <h2 className="flex-shrink-0">Spent time on read : {markread} min</h2>
          <h2 className="flex-shrink-0">Total Bookmark: {bookmarks.length} </h2>
        </div>

        <div className="bookmark mt-8 bg-[#1111110D] p-10 ">
          <h2 className="text-2xl font-bold text-[#111111]">
            Bookmarked Blogs :
          </h2>
          {bookmarks.map((bookmark) => (
            <Bookmark
              markread={markread}
              key={bookmark.id}
              bookmark={bookmark}
            ></Bookmark>
          ))}
        </div>
      </div>
    </>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  markread: PropTypes.number,
};
export default Bookmarks;
