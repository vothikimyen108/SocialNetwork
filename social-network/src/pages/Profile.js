import NewsList from "../components/News/NewsList";
import CreateNews from "../components/News/CreateNews";
import React from "react";

import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from "react";
import BasicPagination from "../components/Layout/BasicPagination";
import NewsForm from "../components/News/NewsForm";
import LayoutListMember from "../components/Layout/LayoutListMember";
import { useRouteMatch, useHistory } from "react-router-dom";
//importpage
import SignUpForm from "../components/Auth/Register/SignUpForm";
import { makeStyles } from "@material-ui/core/styles";
import AlertNoti from "../components/UI/AlertNoti";
//redux
import { useSelector } from "react-redux";
//
import HeaderProfile from "../components/Profile/HeaderProfile";
import InfoProfile from "../components/Profile/InfoProfile";
import ListPhoTo from "../components/Profile/ListPhoto";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
}));
const data = [
  {
    id: 1,
    avatar: "Y",
    name: "Võ yến",
    content:
      "Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up. Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 2,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 3,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 4,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 5,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 6,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 7,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 8,
    avatar: "Y",
    name: "Võ yến",
    content:
      "Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up. Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
];
const Profile = () => {
  const classe = useStyles();
  // dùng redux uiSlice
  const registerIsVisible = useSelector((state) => state.ui.registerIsVisible);
  const [openNewsForm, setNewsForm] = useState(false);
  let history = useHistory();
  //ham mow tao bai viet moi
  const handlerOpenNewsForm = () => {
    setNewsForm(true);
  };
  //dong formnews
  const handerClose = () => {
    setNewsForm(false);
  };
  const match = useRouteMatch();
  //mowr formNews -> tao moi bai viet

  //ham mow tao bai viet moi
  const handlerIsOpenPhoto = () => {
    history.push(`${match.path}/photo`);
  };
  return (
    <div>
      <Grid item xs={12} sm={12} md={12} className={classe.root}>
        <HeaderProfile></HeaderProfile>
        <Grid container className={classe.root} spacing={3}>
          <Grid item md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InfoProfile></InfoProfile>
              </Grid>
              <Grid item xs={12}>
                <ListPhoTo></ListPhoTo>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CreateNews onOpen={handlerOpenNewsForm}></CreateNews>
              </Grid>
              <Grid item xs={12}>
                <NewsList data={data} open={handlerIsOpenPhoto}></NewsList>
              </Grid>
              <Grid item xs={12}>
                {openNewsForm && <NewsForm onClose={handerClose}></NewsForm>}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
