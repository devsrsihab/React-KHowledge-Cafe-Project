const Bookmarks = () => {
  return (
    <>
      <div className=" lg:w-1/3 md:w-2/4 ml-5">
        <div className="bookmark-counter bg-[#6047EC1A] h-[2.5rem] p-10 text-2xl font-bold text-[#6047EC] flex items-center md:justify-center border border-[#6047EC] ">
          <h2 className="flex-shrink-0">Spent time on read : 177 min</h2>
        </div>

        <div className="bookmark mt-8 bg-[#1111110D] p-10 ">
          <h2 className="text-2xl font-bold text-[#111111]">
            Bookmarked Blogs : 8
          </h2>

          <div className="bookmar-items mt-6 p-4 bg-white text-[#111111] font-[600] text-[1.2rem] ">
            <p>Master Microsoft Power Platform and Become an In-Demand!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
