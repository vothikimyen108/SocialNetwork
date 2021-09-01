import { Fragment, useEffect } from "react";
import {
  useParams,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import NewsItem from "../components/News/NewsItem";
import Grid from "@material-ui/core/Grid";
import LayoutListMember from "../components/Layout/LayoutListMember";
import { makeStyles } from "@material-ui/core/styles";
const item = {
  id: 1,
  avatar: "Y",
  name: "Võ yến",
  content:
    "Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up. Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.",
  totalLike: 30,
  totalShare: 20,
  totalComment: 10,
};
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
  const params = useParams();
  let history = useHistory();
  const handlerIsOpenPhoto = () => {
    history.push("/");
  };
  const classe = useStyles();
  return (
    <Fragment>
      <Grid item xs={12} sm={12} md={12} lg={9} className={classe.root}>
        <NewsItem
          key={item.id}
          isGo={true}
          avatar={item.avatar}
          name={item.name}
          content={item.content}
          totalLike={item.totalLike}
          totalShare={item.totalShare}
          totalComment={item.totalComment}
          isExpanded={true}
          isShowImg={true}
          isPageDetail={true}
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
