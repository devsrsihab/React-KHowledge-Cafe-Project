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

  return (
    <>
      <div className="w-10/12 mx-auto">
        <Header></Header>

        <main className="flex md:flex-row flex-col ">
          <Blogs handlerBookmark={handlerBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </main>
      </div>
    </>
  );
}
export default App;
