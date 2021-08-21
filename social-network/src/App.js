import Grid from "@material-ui/core/Grid";
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LayoutListMember from "./components/Layout/LayoutListMember";
import Auction from "./components/Products/Auction";
//cac pages
import NewsDetail from "./pages/NewsDetail";
import NewsFeed from "./pages/NewsFeed";
import PhotoDetail from "./pages/PhotoDetail";
//impor
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 110,
    [theme.breakpoints.down("md")]: {
      marginTop: 160,
    },
  },
}));
const dataMember = [
  {
    id: 1,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
  {
    id: 2,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
  {
    id: 3,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
  {
    id: 4,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
  {
    id: 5,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
];
//c
function App() {
  const classe = useStyles();
  return (
    // <Layout>
    //   <Switch>
    //     <Route path="/" exact>
    //       <Redirect to="/newsfeed" />
    //     </Route>
    //     <Route path="/newsfeed">
    //       <Grid item xs={12} sm={12} md={9} className={classe.root}>
    //         <NewsFeed></NewsFeed>
    //       </Grid>
    //       <Grid item xs={12} sm={12} md={3}>
    //         <LayoutListMember data={dataMember}></LayoutListMember>
    //       </Grid>
    //     </Route>
    //     <Route path="/news/:newsId">
    //       <Grid item xs={12} sm={12} md={9} className={classe.root}>
    //         <NewsDetail></NewsDetail>
    //       </Grid>
    //       <Grid item xs={12} sm={12} md={3}>
    //         <LayoutListMember data={dataMember}></LayoutListMember>
    //       </Grid>
    //     </Route>
    //     <Route path="/photo/:photoId">
    //       <Grid item xs={12} sm={12} md={9} className={classe.root}>
    //         <PhotoDetail></PhotoDetail>
    //       </Grid>
    //     </Route>
    //   </Switch>
    // </Layout>
    <Auction></Auction>
  );
}
export default App;
