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
    width: "85%",
    marginTop: "10px",
    backgroundColor: "#f0f2f5",
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
