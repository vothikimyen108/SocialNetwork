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
    borderBottom: "2px solid #bdb9b7",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: 20,
    height: 250,
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
      width: 150,
      height: 150,
      position: "absolute",
      top: 320,
      border: "5px solid #fff",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    },
    "& h1": {
      marginTop: 60,
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
    margin: "0px 32px",
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
      fontSize: 15,
      padding: 2,

      "&:first-child": {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
  },
}));

export default HeaderProfileStyles;
export const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    marginRight: theme.spacing(4),
    fontSize: 15,
    fontWeight: "bold",
    background: "#fff",

    "&:hover": {
      color: "#7B1FA2",
    },
    "&$selected": {
      color: "#7B1FA2",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#7B1FA2",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);
