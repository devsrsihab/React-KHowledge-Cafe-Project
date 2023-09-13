import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bookmar-items mt-6 mb-4 p-4 bg-white text-[#111111] font-[600] text-[1.2rem] ">
      <p>{title} </p>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
