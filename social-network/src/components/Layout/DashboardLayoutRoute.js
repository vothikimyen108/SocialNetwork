import { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import MainNavigation from "./MainNavigation";
import SecondNavigation from "./SecondNavigation";
import LayoutMenber from "./LayoutMenber";

// export default Layout;
import React, { Component } from "react";
import { Route } from "react-router-dom";

const DashboardLayout = ({ children, ...rest }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <MainNavigation></MainNavigation>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <SecondNavigation mt={10}></SecondNavigation>
        <LayoutMenber></LayoutMenber>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        {children}
      </Grid>
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
