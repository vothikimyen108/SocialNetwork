import { makeStyles } from "@material-ui/core/styles";

const MainNavigationStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mainMenu: {
    backgroundColor: "#673ab7",
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
  title: {
    display: "none",
    color: "#7200ca",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",

    borderRadius: 25,
    backgroundColor: "#F5F3F3",
    "&:hover": {
      backgroundColor: "#EFE5E5",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    color: "#7200ca",
    height: "100%",
    position: "absolute",
    // left: "70%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#000",
    [theme.breakpoints.up("md")]: {
      color: "#7200ca",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "20px",

    "& h3": {
      display: " inline",
      marginLeft: "10px",
      fontSize: "15px",
      fontStyle: "normal",
    },
  },
  button: {
    backgroundColor: "#F5F3F3",
    color: "#7200ca",
  },
  subButton: {
    color: "#7200ca",
  },
  logo: {
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      color: "#7200ca",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
export default MainNavigationStyles;
