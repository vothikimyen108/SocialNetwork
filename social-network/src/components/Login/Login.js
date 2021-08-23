import React from "react";
import { Grid, CssBaseline, Paper } from "@material-ui/core";
import Wave from "react-wavify";
import FormLogin from "./FormLogin";
import LoginStyles from "./LoginStyles";
import avatar from "../../assets/Login/undraw_our_neighborhood_ya1h.svg";
export default function Login() {
  const classes = LoginStyles();

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
          <img src={avatar} className={classes.img} alt={avatar}></img>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={12} square>
        <FormLogin></FormLogin>
      </Grid>
    </Grid>
  );
}