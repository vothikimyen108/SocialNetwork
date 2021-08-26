import { makeStyles } from "@material-ui/core/styles";
const SignUpFormStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    textAlign: "center",
    zIndex: 100,
    boxShadow: "none",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3),
    },
  },
  layout: {
    margin: "auto",
    textAlign: "center",
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  right: {
    boxShadow:
      "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
    //box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  },
  content: {
    width: "100%",
    margin: "auto",

    textAlign: "center",
    height: 300,
  },
  submit: {
    background: "linear-gradient(to right, #8e2de2, #4a00e0)",
    borderRadius: 25,
    border: 0,
    color: "white",
    height: 40,
    width: "130px",
    padding: "0 30px",
  },
  submitBack: {
    background: "#fff",
    color: "#000",
    marginRight: 10,
  },
  label: {
    textTransform: "capitalize",
  },
  test: {
    [theme.breakpoints.down("sm")]: {
      width: 400,
    },
    [theme.breakpoints.up("md")]: {
      width: 1000,
    },
    [theme.breakpoints.up("lg")]: {
      width: 1000,
    },

    height: 560,
    overflow: " auto",
  },
}));
export default SignUpFormStyles;
