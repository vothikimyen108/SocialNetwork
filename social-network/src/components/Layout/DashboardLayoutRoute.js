import { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import MainNavigation from "./MainNavigation";
import SecondNavigation from "./SecondNavigation";
import LayoutMenber from "./LayoutMenber";
import { useSelector } from "react-redux";
import AlertNoti from "../UI/AlertNoti";
import SignUpForm from "../Auth/Register/SignUpForm";
// export default Layout;
import React from "react";
import { Route } from "react-router-dom";
// dùng redux uiSlice

const DashboardLayout = ({ children, ...rest }) => {
  const registerIsVisible = useSelector(
    (state) => state.user.currentUser.address,
  );
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <MainNavigation></MainNavigation>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={3}>
        <SecondNavigation mt={10}></SecondNavigation>
        <LayoutMenber></LayoutMenber>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        {children}
      </Grid>
      {!registerIsVisible && (
        <AlertNoti open={!registerIsVisible} onClose={() => !registerIsVisible}>
          <SignUpForm></SignUpForm>
        </AlertNoti>
      )}
    </Grid>
  );
};

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      )}
    />
  );
};

export default DashboardLayoutRoute;
