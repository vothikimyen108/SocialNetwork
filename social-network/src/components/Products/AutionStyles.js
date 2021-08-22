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
}));
export default AutionStyles;
