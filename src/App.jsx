import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

import "./App.css";
// import PropTypes from "prop-types";
function App() {
  //  define a states
  const [bookmarks, setBookmarks] = useState([]);
  //  bookmark handler
  const handlerBookmark = (addBookmark) => {
    setBookmarks([...bookmarks, addBookmark]);
  };

  // define markread state
  const [markread, setMarkread] = useState(0);
  // define markread handler
  const handlerMarkread = (id, reading_time) => {
    setMarkread(markread + reading_time);
    const newMarkread = bookmarks.filter((mark) => mark.id !== id);
    setBookmarks(newMarkread);
  };

  return (
    <>
      <div className="w-10/12 mx-auto">
        <Header></Header>

        <main className="flex md:flex-row flex-col ">
          <Blogs
            handlerMarkread={handlerMarkread}
            handlerBookmark={handlerBookmark}
          ></Blogs>
          <Bookmarks markread={markread} bookmarks={bookmarks}></Bookmarks>
        </main>
      </div>
    </>
  );
}
export default App;
