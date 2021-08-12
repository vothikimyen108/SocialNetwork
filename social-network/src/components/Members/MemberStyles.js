import { makeStyles } from "@material-ui/core/styles";
const MemberStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  center: {
    flexWrap: "wrap",
    // flexDirection: "col",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& .MuiAvatar-root": {
      width: 90,
      height: 90,
    },
    "& p": {
      color: "grey",
      margin: 0,
    },
  },
  button: {
    padding: "0 30px",
    "& div:first-child": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  label: {
    textTransform: "capitalize",
  },
  submit: {
    background: "linear-gradient(to right, #8e2de2, #4a00e0)",
    borderRadius: 25,
    marginBottom: 20,
    border: 0,
    color: "white",
    height: 40,
    width: "100%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
}));
export default MemberStyles;
