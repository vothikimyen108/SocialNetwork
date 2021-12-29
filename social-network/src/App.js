import Grid from "@material-ui/core/Grid";
import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginLayoutRoute from "./components/Layout/LoginLayoutRoute";
import Login from "./components/Auth/Login/Login";
//cac pages
import NewsDetail from "./pages/NewsDetail";
import NewsFeed from "./pages/NewsFeed";
import PhotoDetail from "./pages/PhotoDetail";
import DashboardLayoutRoute from "./components/Layout/DashboardLayoutRoute";
import MembersPage from "./pages/MembersPage";
import ForgotPass from "./pages/ForgotPass";
//impor
import { BrowserRouter as Router } from "react-router-dom";
import SignUpForm from "./components/Auth/Register/SignUpForm";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
//c
import anh from "./assets/ImgProfile/196900128_337098007802082_959440697203316550_n (1).jpg";
import Profile from "./pages/Profile";
import { getMe } from "./store/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const action = getMe();
        const actionResult = await dispatch(action);
        unwrapResult(actionResult);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLogin();
  }, []);
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
    // <Auction></Auction>
    <>
      <Router>
        <Switch>
          <DashboardLayoutRoute
            path="/"
            exact
            component={NewsFeed}
          ></DashboardLayoutRoute>
          <DashboardLayoutRoute
            path="/news/:id"
            exact
            component={NewsDetail}
          ></DashboardLayoutRoute>
          <DashboardLayoutRoute
            path="/profile/:idUser"
            exact
            component={Profile}
          ></DashboardLayoutRoute>
          <DashboardLayoutRoute
            path="/members"
            exact
            component={MembersPage}
          ></DashboardLayoutRoute>
          <LoginLayoutRoute
            path="/forgotpass"
            exact
            component={ForgotPass}
          ></LoginLayoutRoute>
          <Route path="/photo/:photoId" exact>
            <PhotoDetail></PhotoDetail>
          </Route>
          <LoginLayoutRoute path="/login" component={Login} />
        </Switch>
      </Router>
      {/* <img src={anh} alt="ahh"></img> */}
    </>
  );
}
export default App;
