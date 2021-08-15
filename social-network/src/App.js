// import Login from "./components/Login/Login";
//
// import CommentItem from "./components/Comment/CommentItem";
// import CommentList from "./components/Comment/CommentList";

// import React, { useState } from "react";
// import Photo from "./components/Photos/Photo";
// import NewsForm from "./components/News/NewsForm";
// import Member from "./components/Members/Member";
// import MembersList from "./components/Members/MembersList";
import PhotoList from "./components/Photos/PhotoList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MainNavigation from "./components/Layout/MainNavigation";
import HeaderProfile from "./components/Profile/HeaderProfile";
import SecondNavigation from "./components/Layout/SecondNavigation";
import LayoutMenber from "./components/Layout/LayoutMenber";

import ListPhoto from "./components/Profile/ListPhoto";
import Anh from "./assets/ImgPost/anh1.jpg";
import Anh1 from "./assets/ImgPost/anh2.jpg";
import Anh2 from "./assets/ImgPost/anh3.jpg";
import Anh3 from "./assets/ImgPost/anh4.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

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
  const itemData = [
    {
      img: `${Anh}`,
      title: "Breakfast",
      author: "jill111",
      featured: true,
    },
    {
      img: `${Anh1}`,
      title: "Tasty burger",
      author: "director90",
    },
    {
      img: `${Anh2}`,
      title: "Camera",
      author: "Danson67",
    },
    {
      img: `${Anh3}`,
      title: "Morning",
      author: "fancycrave1",
      featured: true,
    },
    {
      img: `${Anh}`,
      title: "Breakfast",
      author: "jill111",
      featured: true,
    },
    {
      img: `${Anh1}`,
      title: "Tasty burger",
      author: "director90",
    },
    {
      img: `${Anh2}`,
      title: "Camera",
      author: "Danson67",
    },
    {
      img: `${Anh3}`,
      title: "Morning",
      author: "fancycrave1",
      featured: true,
    },
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <MainNavigation></MainNavigation>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <SecondNavigation mt={10}></SecondNavigation>
          <LayoutMenber></LayoutMenber>
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <HeaderProfile></HeaderProfile>
          <ListPhoto></ListPhoto>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
