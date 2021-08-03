import StarfieldAnimation from "react-starfield-animation";
import { makeStyles } from "@material-ui/core/styles";


const StylesLogin = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  left: {
    position: "relative",
    width: "100%",
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
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: "0px",
  },
}));

export default StylesLogin;
