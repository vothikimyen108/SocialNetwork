import { makeStyles } from "@material-ui/core/styles";
const NewCommentStyles = makeStyles((theme) => ({
  contentComment: {
    border: "1px solid #f0f2f5",
    borderRadius: "30px",
    padding: "10px",
    height: "auto",
    float: "left",
    width: "80%",
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
    marginTop: "10px",
    backgroundColor: "#f0f2f5",
  },
  avatar: {
    marginTop: "12px",
  },
  btEdit: {
    margin: "auto",
    float: "left",
    textAlign: "center",
    width: "2%",
    height: "100%",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "15px",
    marginTop: "5px",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "19px",
      marginTop: "5px",
      width: "2%",
    },
    boxShadow: "none",
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
  button: {
    width: "40px",
    height: "40px",
    backgroundColor: "#9c27b0",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#482880",
      color: "#fff",
    },
  },
}));
export default NewCommentStyles;
