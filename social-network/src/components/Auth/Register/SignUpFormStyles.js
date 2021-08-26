import { makeStyles } from "@material-ui/core/styles";
const SignUpFormStyles = makeStyles((theme) => ({
  paper: {
    height: 600,
    boxShadow: "none",
    padding: theme.spacing(2),
    margin: "auto",
    textAlign: "center",
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
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  content: {
    width: "100%",
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
}));
export default SignUpFormStyles;
