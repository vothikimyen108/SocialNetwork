import React from "react";
import { Box, Grid, CssBaseline, Paper } from "@material-ui/core";
import Wave from "react-wavify";
import LoginForm from "./LoginForm";
import StylesLogin from "./StylesLogin";
import avatar from "../../assets/Login/undraw_our_neighborhood_ya1h.svg";
export default function SignInSide() {
  const classes = StylesLogin();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={7} className={classes.left}>
        <Wave
          fill="url(#gradient)"
          className={classes.wave}
          options={{ speed: 0.5 }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#512DA8 " />
              <stop offset="90%" stopColor="#673AB7 " />
            </linearGradient>
          </defs>
        </Wave>
        <div className={classes.img}>
          <img src={avatar} className={classes.img}></img>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={5} elevation={3} square component={Paper}>
        <LoginForm></LoginForm>
      </Grid>
    </Grid>
  );
}