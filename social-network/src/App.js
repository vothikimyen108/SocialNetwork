import Grid from "@material-ui/core/Grid";
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginLayoutRoute from "./components/Layout/LoginLayoutRoute";
import Login from "./components/Auth/Login/Login";
//cac pages
import NewsDetail from "./pages/NewsDetail";
import NewsFeed from "./pages/NewsFeed";
import PhotoDetail from "./pages/PhotoDetail";
import DashboardLayoutRoute from "./components/Layout/DashboardLayoutRoute";
//impor
import { BrowserRouter as Router } from "react-router-dom";
import SignUpForm from "./components/Auth/Register/SignUpForm";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
//c
function App() {
  return (
    // <>
    //   <Router>
    //     <Switch>
    //       <DashboardLayoutRoute
    //         path="/"
    //         exact
    //         component={NewsFeed}
    //       ></DashboardLayoutRoute>
    //       <DashboardLayoutRoute
    //         path="/news/:newsId"
    //         exact
    //         component={NewsDetail}
    //       ></DashboardLayoutRoute>
    //       <Route path="/photo/:photoId" exact>
    //         <PhotoDetail></PhotoDetail>
    //       </Route>
    //       <LoginLayoutRoute path="/loginsignup" component={Login} />
    //     </Switch>
    //   </Router>
    // </>
    <SignUpForm></SignUpForm>
  );
}
export default App;
