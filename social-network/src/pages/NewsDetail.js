import { Fragment, useEffect } from "react";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import NewsItem from "../components/News/NewsItem";
import Grid from "@material-ui/core/Grid";
import LayoutListMember from "../components/Layout/LayoutListMember";
import { makeStyles } from "@material-ui/core/styles";
import newsApi from "../api/newsApi";
import useHttp from "../hook/useHttp";
import { CircularProgress } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 110,
    [theme.breakpoints.down("md")]: {
      marginTop: 160,
    },
  },
}));

const NewsDetail = () => {
  //lấy giá trị tham số của url
  const { id } = useParams();
  let history = useHistory();
  const handlerIsOpenPhoto = () => {
    history.push("/");
  };
  const classe = useStyles();
  const {
    sendRequest,
    status,
    data: item,
    error,
  } = useHttp(newsApi.getPost, true);

  useEffect(() => {
    sendRequest(id);
  }, []);

  if (status === "pending") {
    return (
      <div className={classe.root}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <p style={{ marginTop: 300, textAlign: "center" }}>404</p>;
  }

  if (!item) {
    return <p style={{ marginTop: 300, textAlign: "center" }}>{item.id}</p>;
  }

  return (
    <Fragment>
      <Grid item xs={12} sm={12} md={12} lg={9} className={classe.root}>
        <NewsItem
          isGo={true}
          // className={classes.border}
          id={item.id}
          avatar={item.avatar}
          name={item.user.first_name + item.user.last_name}
          content={item.content}
          totalLike={item.total_like}
          totalShare={item.totalShare}
          totalComment={item.total_comment}
          isExpanded={true}
          isShowImg={true}
          tags={item.tags}
          date={moment(item.created_date).startOf("minute").fromNow()}
          // open={props.open}
          product={item.product}
          image={item.image}
          isPageDetail={false}
          open={handlerIsOpenPhoto}
        ></NewsItem>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={3}>
        <LayoutListMember></LayoutListMember>
      </Grid>
    </Fragment>
  );
};

export default NewsDetail;
