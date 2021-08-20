import { makeStyles } from "@material-ui/core/styles";
const ProductSlyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  button: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "inline",
    },
  },
  go: {
    margin: 5,
    "&:last-of-type": {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "grey",
    },
  },
  action: {
    backgroundColor: "#fff",
    display: "block",
    color: "#7200ca",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  text: {
    // display: "inline",
    margin: 0,
    paddingRight: 10,
    color: "grey",
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "inline",
    },
  },
}));
export default ProductSlyles;
