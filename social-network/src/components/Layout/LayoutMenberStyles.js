import { makeStyles } from "@material-ui/core/styles";
import teams from "../../assets/ImgHome/teams.svg";
const LayoutMenberStyles = makeStyles((theme) => ({
  layout: {
    display: "none",
    background: "#fff",
    position: "fixed",
    top: "54%",
    left: 0,
    right: 0,
    [theme.breakpoints.up("md")]: {
      height: 300,
      marginTop: 30,
      marginLeft: 30,
      width: 230,
      borderRadius: 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
      backgroundImage: `url(${teams})`,
      backgroundSize: "230px 70px",
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& h1": {
        fontSize: "60px",
        margin: 0,
        color: "#ab003c",
      },
      "& p": {
        color: "#482880",
      },
    },
  },
}));
export default LayoutMenberStyles;
