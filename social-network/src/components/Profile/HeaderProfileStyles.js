import { makeStyles, withStyles } from "@material-ui/core/styles";
import teams from "../../assets/ImgProfile/teams.svg";

import Tab from "@material-ui/core/Tab";
const HeaderProfileStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#fff",
    marginTop: 110,
    borderRadius: 20,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
    margin: 20,
    padding: 10,
    borderTop: "2px solid #F6F4F4",
    fontFamily: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: 20,
    height: 180,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    backgroundImage: `url(${teams})`,
  },
  containerImg: {
    height: " 100%",
    width: "100%",
    objectFit: "cover",
  },
  center: {
    flexWrap: "wrap",
    // flexDirection: "col",
    paddingTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& .MuiAvatar-root": {
      width: 130,
      height: 130,
      position: "absolute",
      top: 260,
      border: "5px solid #fff",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    },
    "& h2": {
      marginTop: 40,
      color: "#7B1FA2",
      fontWeight: "bold",
    },
  },
  info: {
    flexWrap: "wrap",
    // flexDirection: "col",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  infoContent: {
    padding: 10,
    margin: "0px 20px",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "#fff1ff",
    color: "#000",
    transition: "all .2s",
    "&:hover": {
      background: "#7B1FA2",
      color: "#fff",
      cursor: "pointer",
    },
    "& span": {
      fontSize: 10,
      padding: 2,

      "&:first-child": {
        fontSize: 15,
        fontWeight: "bold",
      },
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0px 32px",
      "& span": {
        fontSize: 14,

        "&:first-child": {
          fontSize: 18,
        },
      },
    },
  },
}));

export default HeaderProfileStyles;
export const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 60,
    marginRight: theme.spacing(1),
    fontSize: 15,
    fontWeight: "bold",
    background: "#fff",

    "&:hover": {
      color: "#7B1FA2",
    },
    "&$selected": {},
    "&:focus": {
      color: "#7B1FA2",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);
