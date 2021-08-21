import { makeStyles } from "@material-ui/core/styles";

const PhotoStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
  },

  img: {
    width: "auto",
    height: "100%",
  },
  left: {
    height: "40%",

    [theme.breakpoints.down("sm")]: {
      height: "40%",
    },

    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },
  },
  right: {
    overflow: "auto",
    width: "auto",
    height: "60%",
    [theme.breakpoints.down("sm")]: {
      height: "60%",
    },

    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },
  },
  button: {
    width: "40px",
    height: "40px",
    backgroundColor: "#e4e6eb",
    color: "#000",
    position: "absolute",
    left: "0",
    top: "10px",
    zIndex: 100,
    "&:hover": {
      backgroundColor: "#e4e6eb",
      color: "#000",
    },
  },
}));
export default PhotoStyles;
