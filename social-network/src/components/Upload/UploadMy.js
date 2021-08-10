// import { Button } from "bootstrap";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Anh } from "../../assets/ImgHome/avatar.svg";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import Button from "@material-ui/core/Button";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "40%",
    borderRadius: 20,
    height: "70vh",
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
      width: "100%",
    },
  },
  imageList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto",
    width: "auto",
    height: "22vh",
  },
  title: {
    background: "#7B1FA2",
    color: "#fff",
    "&:hover": {
      background: "#7B1FA2",
      color: "#fff",
    },
  },
  close: {
    display: "absolute",
    left: "34%",
    [theme.breakpoints.down("sm")]: {
      left: "26%",
    },
    margin: 0,
    padding: 10,
    background: "#7B1FA2",
    color: "#fff",
    "&:hover": {
      background: "#7B1FA2",
      color: "#fff",
    },
  },
  titleBar: {
    background: "transparent",
  },
  center: {
    margin: "auto",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "2px solid #f0f2f5",
    "&:last-child": {
      float: "right",
    },
  },
  item: {
    display: "flex",
    paddingTop: "20px",
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: 0,

    "& h2": {
      marginLeft: "14px",
      marginTop: "14px",
      fontSize: "20px",
      fontStyle: "normal",
    },
  },
  content: {
    width: "100%",
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: "20px",
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
    paddingLeft: 10,
    paddingRight: 10,
    "& .MuiMenuItem-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "150px",
      float: "left",
      margin: 0,
      [theme.breakpoints.down("sm")]: {
        width: "130px",
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    "& .MuiGrid-spacing-xs-2 > .MuiGrid-item": {},
  },
  input: {
    display: "none",
    color: "#7200ca",
  },
  button: {
    background: "linear-gradient(to right, #8e2de2, #4a00e0)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "100%",
  },
  label: {
    textTransform: "capitalize",
  },
  submit: {
    width: "100%",
    padding: 10,
    // paddingRight: "20px",
    // paddingLeft: "20px",
    // paddingBottom: "20px",
  },
}));
const UploadMy = (props) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  //thêm
  const handleImageChange = (e) => {
    console.log(e.target.files);
    if (e.target.files) {
      let filesArray = [];
      for (let i = 0; i < e.target.files.length; i++) {
        filesArray.push(URL.createObjectURL(e.target.files[i]));
      }

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file), // avoid memory leak
      );
    }
  };
  //xóa
  const handlerRemove = (photo) => {
    console.log(photo);
    setSelectedFiles((oldState) => oldState.filter((item) => item !== photo));
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.center}>
            <h2>Tạo bài viết</h2>

            <IconButton className={classes.close}>
              <CloseIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.item}>
            <Avatar className={classes.green}>
              <Anh></Anh>
            </Avatar>
            <h2> Yến</h2>
          </div>
        </Grid>
        <div className={classes.content}>
          <TextField
            classes={{
              root: classes.inputCMT,
            }}
            multiline
            placeholder="Bạn đang nghĩ gì vậy?"
            inputProps={{
              style: {
                textAlign: "justify",
                textJustify: "inter-character",
              },
            }}
            variant="outlined"
          />{" "}
        </div>
        <div className={classes.content}>
          <ImageList className={classes.imageList} cols={3} rowHeight={160}>
            {selectedFiles.map((item, id) => (
              <ImageListItem key={id}>
                <img src={item} alt={item} />
                <ImageListItemBar
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
                    <IconButton
                      className={classes.title}
                      onClick={handlerRemove.bind(null, item)}
                    >
                      <CloseIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <Grid item xs={12} className={classes.navButton}>
          <MenuItem>
            <p>Thêm vào bài viết</p>
          </MenuItem>
          <MenuItem>
            {/* <input
              className={classes.input}
              type="file"
              id="files"
              name="files[]"
              multiple
              onChange={handleImageChange}
            />
            <label htmlFor="files">
              <IconButton
                aria-label="upload picture"
                component="span"
                className={classes.subButton}
              >
                <PhotoLibraryIcon></PhotoLibraryIcon>
              </IconButton>
            </label>
            <p>Ảnh</p> */}
            <input
              type="file"
              id="files"
              name="files[]"
              multiple="multiple"
              aria-describedby="inputGroupFileAddon01"
              onChange={handleImageChange}
            />
          </MenuItem>
          <MenuItem>
            <IconButton
              className={classes.subButton}
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <MonetizationOnIcon></MonetizationOnIcon>
            </IconButton>
            <p>Đấu giá</p>
          </MenuItem>
        </Grid>
        <Grid item xs={12} className={classes.submit}>
          <Button
            classes={{
              root: classes.button, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
          >
            Đăng bài
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default UploadMy;
