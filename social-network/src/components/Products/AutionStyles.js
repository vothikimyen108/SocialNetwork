import { makeStyles } from "@material-ui/core/styles";
const AutionStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3, 0, 3),
    flexDirection: "row-reverse",

    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
      {
        display: "none",
        margin: 80,
      },
  },
  paper: {},
  textField: {
    width: "60%",
    margin: theme.spacing(1, 0, 0),
    [`& fieldset`]: {
      borderRadius: 25,
      border: "1px solid #4a00e0",
      height: 46,
    },
  },
  btIcon: {
    margin: theme.spacing(1, 0, 0),
    background: "linear-gradient(to right, #8e2de2, #4a00e0)",
    border: 0,
    color: "white",
    height: 40,
    // borderRadius: 20,
    width: 40,
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
    background: "linear-gradient(to right, #8e2de2, #4a00e0)",
    borderRadius: 25,
    border: 0,
    color: "white",
    height: 40,
    width: "100%",
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
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
      padding: 10,
      fontSize: 15,
    },
  },
  close: {
    display: "absolute",
    left: "32%",
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
  button: {
    backgroundColor: "#7B1FA2",
    marginTop: 10,
    "&:hover": {
      background: "#7B1FA2",
      color: "#fff",
    },
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "100%",
  },
  form: {
    width: "100%",
    border: 0,
    [theme.breakpoints.up("lg")]: {
      width: 500,
    },
  },
}));
export default AutionStyles;
