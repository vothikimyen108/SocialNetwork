import { makeStyles } from "@material-ui/core/styles";
const NewsFormStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    overflow: "auto",
    borderRadius: 20,
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      //   height: "auto",
      width: "100%",
    },
  },
  imageList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto",
    width: "auto",
    height: "22vh",
  },
  title: {
    background: "#7B1FA2",
    color: "#fff",
    "&:hover": {
      background: "#7B1FA2",
      color: "#fff",
    },
  },
  close: {
    display: "absolute",
    left: "34%",
    [theme.breakpoints.down("sm")]: {
      left: "26%",
    },
    margin: 0,
    padding: 10,
    background: "#7B1FA2",
    color: "#fff",
    "&:hover": {
      background: "#7B1FA2",
      color: "#fff",
    },
  },
  titleBar: {
    background: "transparent",
  },
  center: {
    margin: "auto",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "2px solid #f0f2f5",
    "&:last-child": {
      float: "right",
    },
  },
  item: {
    display: "flex",
    paddingTop: "20px",
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: 0,

    "& h2": {
      marginLeft: "14px",
      marginTop: "14px",
      fontSize: "20px",
      fontStyle: "normal",
    },
  },
  content: {
    width: "100%",
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: "20px",
  },
  inputCMT: {
    maxheight: "auto",
    width: "100%",
    padding: 0,

    [`& fieldset`]: {
      border: 0,
    },
    "& .MuiOutlinedInput-multiline": {
      padding: "5px 0px",
    },
  },
  subButton: {
    color: "#7200ca",
  },
  navButton: {
    margin: 0,
    paddingLeft: 10,
    paddingRight: 10,
    "& .MuiMenuItem-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "150px",
      float: "left",
      margin: 0,
      [theme.breakpoints.down("sm")]: {
        width: "130px",
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    "& .MuiGrid-spacing-xs-2 > .MuiGrid-item": {},
  },
  input: {
    display: "none",
    color: "#7200ca",
  },
  button: {
    background: "linear-gradient(to right, #8e2de2, #4a00e0)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "100%",
  },
  label: {
    textTransform: "capitalize",
  },
  submit: {
    width: "100%",
    padding: "0px 10px 30px 10px",
  },
  auction: {
    width: "100%",
    padding: 10,
    border: "1px solid #ccc",
    position: "relative",
    "& .MuiIconButton-root": {},
  },
}));
export default NewsFormStyles;
