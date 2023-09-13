import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import "./App.css";
// import PropTypes from "prop-types";
function App() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Header></Header>

        <main className="flex md:flex-row flex-col ">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </main>
      </div>
    </>
  );
}
export default App;
