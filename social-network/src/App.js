import Grid from "@material-ui/core/Grid";
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/DashboardLayoutRoute";
import LayoutListMember from "./components/Layout/LayoutListMember";
import Auction from "./components/Products/Auction";
import LoginLayoutRoute from "./components/Layout/LoginLayoutRoute";
import Login from "./components/Login/Login";
//cac pages
import NewsDetail from "./pages/NewsDetail";
import NewsFeed from "./pages/NewsFeed";
import PhotoDetail from "./pages/PhotoDetail";
import DashboardLayoutRoute from "./components/Layout/DashboardLayoutRoute";
//impor
import { BrowserRouter as Router } from "react-router-dom";
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
    <>
      <Router>
        <Switch>
          <DashboardLayoutRoute
            path="/"
            exact
            component={NewsFeed}
          ></DashboardLayoutRoute>
          <DashboardLayoutRoute
            path="/news/:newsId"
            exact
            component={NewsDetail}
          ></DashboardLayoutRoute>
          <Route path="/photo/:photoId" exact>
            <PhotoDetail></PhotoDetail>
          </Route>
          <LoginLayoutRoute path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
