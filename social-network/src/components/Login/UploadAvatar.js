import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState, useRef, useEffect } from "react";
import ImageList from "@material-ui/core/ImageList";
import NewsFormStyles from "../News/NewsFormStyles";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import Upload from "../../assets/img/upload.svg";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    "& > *": {
      margin: theme.spacing(1),
    },
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
}));
const UploadAvatar = (props) => {
  const classes = useStyles();

  const handlerImg = () => {
    return (
      <div className={classes.root}>
        {values === "" ? (
          <Avatar alt="Remy Sharp" src={Upload} className={classes.large} />
        ) : (
          <Avatar alt="Remy Sharp" src={values} className={classes.large} />
        )}
      </div>
    );
  };

  const { values, handleChange } = props;
  return (
    <div>
      {" "}
      {handlerImg()}
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        // aria-describedby="inputGroupFileAddon01"
        // ref={fileInputRef}
        //defaultValue={values}
        onChange={handleChange}
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
