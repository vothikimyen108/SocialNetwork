import { makeStyles } from "@material-ui/core/styles";

const MainNavigationStyles = makeStyles((theme) => ({
  main: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mainMenu: {
    backgroundColor: "#673ab7",
    color: "#fff",
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
  title: {
    display: "none",
    color: "#fff",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      color: "#7200ca",
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
    [theme.breakpoints.up("lg")]: {
      color: "#7200ca",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
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
    [theme.breakpoints.up("lg")]: {
      color: "#7200ca",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  noti: {
    transform: "translateX(10px) translateY(50px)",
    maxHeight: "60h",
    width: "40ch",
  },
}));
export default MainNavigationStyles;
