import { makeStyles } from "@material-ui/core/styles";

const LoginStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  left: {
    position: "relative",

    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "30vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "30vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },
  },
  right: {
    height: "100%",
  },
  wave: {
    height: "24%",
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      left: "4%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
      left: "4%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "100%",
      width: "100%",
      left: "0px",
    },
  },
}));

export default LoginStyles;
