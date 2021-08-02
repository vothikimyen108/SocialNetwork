import StarfieldAnimation from "react-starfield-animation";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "./LoginForm";
const makeComponentStyles = makeStyles(() => ({
  ...LoginForm,
}));
const StylesLogin = makeStyles((theme) => ({
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
    width: "50%",
  },
}));

export default StylesLogin;
