import { makeStyles } from "@material-ui/core/styles";
import teams from "../../assets/ImgHome/teams.svg";
const LayoutListMemberStyles = makeStyles((theme) => ({
  layout: {
    display: "none",
    background: "#fff",
    position: "fixed",
    top: "10%",
    right: 20,
    [theme.breakpoints.up("lg")]: {
      height: 610,
      marginTop: 30,
      marginLeft: 30,
      width: 280,
      borderRadius: 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
      backgroundImage: `url(${teams})`,
      backgroundSize: "230px 70px",
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      flexDirection: "column",
      display: "flex",
      //  justifyContent: "center",
      alignItems: "center",
      "& h4": {
        fontSize: 20,
        color: "#482880",
      },
    },
  },
}));
export default LayoutListMemberStyles;
