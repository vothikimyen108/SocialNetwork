import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarfieldAnimation from "react-starfield-animation";
import Wave from "react-wavify";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  wave: {
    height: "28%",
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Wave
        style={{ zIndex: 4 }}
        options={{ speed: 0.5 }}
        fill="#9C27B0"
        className={classes.wave}
      /> */}

      <Wave fill="url(#gradient)" className={classes.wave}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#9733EE " />
            <stop offset="90%" stopColor="#DA22FF " />
          </linearGradient>
        </defs>
      </Wave>
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.paper"
        boxShadow={3}
        width="33%"
        height="70%"
      >
        <LoginForm></LoginForm>
      </Box>
    </div>
  );
}
