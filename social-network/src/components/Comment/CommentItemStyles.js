import { makeStyles } from "@material-ui/core/styles";
const CommentItemStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  contentComment: {
    border: "1px solid #f0f2f5",
    borderRadius: "30px",
    padding: "10px",
    height: "auto",
    float: "left",
    marginTop: "10px",
    backgroundColor: "#f0f2f5",
    width: "80%",
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
  },
  authorComment: {
    fontWeight: "bold",
    "& span": {
      fontWeight: "normal",
      color: "grey",
    },
  },
  btEdit: {
    margin: "auto",
    float: "left",
    textAlign: "center",
    width: "5%",
    height: "100%",
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
}));
export default CommentItemStyles;
