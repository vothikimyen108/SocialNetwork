import { makeStyles } from "@material-ui/core/styles";
const CreateNewsStyles = makeStyles((theme) => ({
  contentComment: {
    border: "1px solid #f0f2f5",
    borderRadius: "30px",
    padding: "10px",
    height: "auto",
    float: "left",
    width: "93%",
    marginTop: "10px",
    backgroundColor: "#f0f2f5",
  },
  avatar: {
    marginTop: "12px",
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
    padding: 0,
    "& .MuiMenuItem-root": { width: "130px", float: "left", margin: 0 },
    "& .MuiGrid-spacing-xs-2 > .MuiGrid-item": {},
  },
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    "& div": {
      width: "100%",
      marginTop: 10,

      borderBottom: "2px solid #f0f2f5",
    },
  },
  root: {
    background: "#fff",
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: 20,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
}));
export default CreateNewsStyles;
