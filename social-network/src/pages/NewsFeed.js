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
import { CircularProgress } from "@material-ui/core";
//redux
import { useSelector } from "react-redux";
import useHttp from "../hook/useHttp";
import newsApi from "../api/newsApi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 110,
    [theme.breakpoints.down("md")]: {
      marginTop: 160,
    },
  },
  center: {
    marginTop: "100px",
  },
}));

const NewsFeed = () => {
  //mowr formNews -> tao moi bai viet
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
  //dong formnews
  const classe = useStyles();
  // dùng redux uiSlice
  const registerIsVisible = useSelector(
    (state) => state.user.currentUser.address,
  );

  //khai báo form ban đầu rỗng
  const pages = 1;

  const {
    sendRequest,
    status,
    data: item,
    error,
  } = useHttp(newsApi.getListApi, true);

  useEffect(() => {
    sendRequest(pages);
  }, [pages]);

  if (status === "pending") {
    return (
      <div className={classe.root}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <p style={{ marginTop: 800 }}>404</p>;
  }

  if (!item) {
    return <p style={{ marginTop: 800 }}>{item.id}</p>;
  }

  return (
    <div>
      <Grid item xs={12} sm={12} md={12} lg={9} className={classe.root}>
        {console.log(item)}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CreateNews onOpen={handlerOpenNewsForm}></CreateNews>
          </Grid>
          <Grid item xs={12}>
            <NewsList data={item.results} open={handlerIsOpenPhoto}></NewsList>
          </Grid>
          <Grid item xs={12}>
            <BasicPagination></BasicPagination>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <LayoutListMember></LayoutListMember>
      </Grid>
      {openNewsForm && <NewsForm onClose={handerClose}></NewsForm>}
      {/* {!registerIsVisible && (
        <AlertNoti open={!registerIsVisible} onClose={() => !registerIsVisible}>
          <SignUpForm></SignUpForm>
        </AlertNoti>
      )} */}
    </div>
  );
};

export default NewsFeed;
