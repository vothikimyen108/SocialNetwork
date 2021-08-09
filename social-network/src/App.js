import "./App.css";
// import Login from "./components/Login/Login";
//
// import CommentItem from "./components/Comment/CommentItem";
// import CommentList from "./components/Comment/CommentList";

// import React, { useState } from "react";
// import Photo from "./components/Photos/Photo";
import CreateNews from "./components/News/CreateNews";
function App() {
  // const [openCart, setOpenCart] = useState(false);
  // const handerOnlick = () => {
  //   setOpenCart(true);
  //   console.log(openCart);
  // };
  // const handerClose = () => {
  //   console.log(openCart);
  //   setOpenCart(false);
  // };
  return (
    // <div>
    //   <button onClick={handerOnlick}>aaaaa</button>
    //   {openCart && <Photo onClose={handerClose}></Photo>}
    // </div>
    <CreateNews></CreateNews>
  );
}

export default App;
