import React, { useState, useRef, useEffect } from "react";
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
//css
import NewsFormStyles from "./NewsFormStyles";
//overlay
import Modal from "../UI/Modal";

const NewsForm = (props) => {
  const fileInputRef = useRef();
  const [images, setImages] = useState([]);
  const classes = NewsFormStyles();
  const [isOpenAuction, setIsOpenAuction] = useState(false);
  const handlerAuction = () => {
    return (
      <Grid item xs={12} className={classes.auction}>
        <IconButton onClick={openAuction}>
          <CloseIcon />
        </IconButton>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Tên sản phẩm"
            type="Text"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Giá bắt đầu"
            type="Number"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            id="date"
            label="Ngày kết thúc"
            type="date"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            defaultValue="2021-11-6"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>
    );
  };

  const openAuction = () => {
    setIsOpenAuction(!isOpenAuction);
  };

  const addImage = (e) => {
    if (e.target.files) {
      let filesArray = [];
      for (let i = 0; i < e.target.files.length; i++) {
        filesArray.push(URL.createObjectURL(e.target.files[i]));
      }

      setImages((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  useEffect(() => {
    if (fileInputRef) fileInputRef.current.value = null;
    console.log(images);
  }, [images]);
  // //xóa
  const handlerRemove = (photo) => {
    console.log(photo);
    setImages((oldState) => oldState.filter((item) => item !== photo));
  };
  return (
    <Modal>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.center}>
              <h2>Tạo bài viết</h2>

              <IconButton className={classes.close} onClick={props.onClose}>
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
              {images.map((item, id) => (
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
          {isOpenAuction && handlerAuction()}
          <Grid item xs={12} className={classes.navButton}>
            <MenuItem>
              <p>Thêm vào bài viết</p>
            </MenuItem>
            <MenuItem>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
                multiple
                // aria-describedby="inputGroupFileAddon01"
                ref={fileInputRef}
                onChange={addImage}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  className={classes.subButton}
                >
                  <PhotoLibraryIcon></PhotoLibraryIcon>
                </IconButton>
              </label>
              <p>Ảnh</p>
            </MenuItem>
            <MenuItem onClick={openAuction}>
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
    </Modal>
  );
};

export default NewsForm;
