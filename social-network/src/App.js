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
import NotFound from "./pages/NotFound";
//impor
import { BrowserRouter as Router } from "react-router-dom";

//c
import anh from "./assets/ImgProfile/196900128_337098007802082_959440697203316550_n (1).jpg";
import Profile from "./pages/Profile";
import { getMe } from "./store/userSlice";
import { getNoti } from "./store/notificationSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const action = getMe();
        const actionResult = await dispatch(action);
        unwrapResult(actionResult);

        const actionNoTi = getNoti();
        const actionResultNoti = await dispatch(actionNoTi);
        unwrapResult(actionResultNoti);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLogin();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          {!isLoggedIn ? (
            <LoginLayoutRoute path="/" component={Login} />
          ) : (
            <DashboardLayoutRoute
              path="/"
              exact
              component={NewsFeed}
            ></DashboardLayoutRoute>
          )}

          {isLoggedIn && (
            <DashboardLayoutRoute
              path="/news/:id"
              exact
              component={NewsDetail}
            ></DashboardLayoutRoute>
          )}

          {isLoggedIn && (
            <DashboardLayoutRoute
              path="/profile/:idUser"
              exact
              component={Profile}
            ></DashboardLayoutRoute>
          )}

          {isLoggedIn && (
            <DashboardLayoutRoute
              path="/members"
              exact
              component={MembersPage}
            ></DashboardLayoutRoute>
          )}

          {isLoggedIn && (
            <LoginLayoutRoute
              path="/forgotpass"
              exact
              component={ForgotPass}
            ></LoginLayoutRoute>
          )}

          {isLoggedIn && (
            <Route path="/photo/:photoId" exact>
              <PhotoDetail></PhotoDetail>
            </Route>
          )}
          {isLoggedIn && (
            <Route path="*">
              <NotFound />
            </Route>
          )}
        </Switch>
      </Router>
      {/* <img src={anh} alt="ahh"></img> */}
    </>
  );
}
export default App;
