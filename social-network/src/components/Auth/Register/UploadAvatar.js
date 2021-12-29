import IconButton from "@material-ui/core/IconButton";
import React from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import Upload from "../../../assets/img/uploadfile.svg";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  input: {
    display: "none",
    color: "#7200ca",
  },
  subButton: {
    color: "#7200ca",
  },
  name: {
    width: "100%",
    height: "100%",
  },
}));
const UploadAvatar = (props) => {
  const classes = useStyles();
  const { values, handleChange } = props;
  const handlerImg = () => {
    return (
      <div className={classes.root}>
        {values.avatar === "" ? (
          <Avatar alt="Remy Sharp" src={Upload} className={classes.large} />
        ) : (
          <Avatar
            alt="Remy Sharp"
            src={values.avatar}
            className={classes.large}
          />
        )}
      </div>
    );
  };
  return (
    <div className={classes.name}>
      {handlerImg()}
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={handleChange("avatar")}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          aria-label="upload picture"
          component="span"
          className={classes.subButton}
        >
          <PhotoLibraryIcon></PhotoLibraryIcon>
        </IconButton>
      </label>{" "}
      chọn ảnh đại diện
    </div>
  );
};
export default UploadAvatar;
