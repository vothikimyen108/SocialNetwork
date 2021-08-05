import { makeStyles } from "@material-ui/core/styles";
const SecondNavigationStyles = makeStyles((theme) => ({
  secondMenu: {
    background: "#fff",
    display: "flex",
    margin: "0",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    borderRadius: 0,
    [theme.breakpoints.up("md")]: {
      height: 280,
      marginTop: 30,
      marginLeft: 30,
      width: 230,
      borderRadius: 20,
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    },
  },
  menuItem: {
    borderBottom: 0,
    [theme.breakpoints.up("md")]: {
      borderBottom: "1px solid  #D1CBCB",
      height: "70px",
      [`&:nth-child(3)`]: {
        borderBottom: 0,
      },
      [`&:last-child`]: {
        display: "none",
      },
    },
  },
  typography: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      padding: "5px",
    },
  },

  menuList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  subButton: {
    color: "#7200ca",
  },
}));
export default SecondNavigationStyles;
