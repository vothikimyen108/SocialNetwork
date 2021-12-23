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
import newsApi from "../../api/newsApi";
import CustomizedSnackbars from "../UI/CustomizedSnackbars";
//css
import NewsFormStyles from "./NewsFormStyles";
//overlay
import Modal from "../UI/Modal";
import AddTag from "../Tags/AddTag";
//api

const NewsForm = (props) => {
  const fileInputRef = useRef();
  const [images, setImages] = useState([]);
  const classes = NewsFormStyles();
  const [isOpenAuction, setIsOpenAuction] = useState(false);
  const [isOpenImg, setIsOpenImg] = useState(false);
  const [tags, setTags] = useState([]);
  const changeTags = (tags) => {
    setTags(tags);
    console.log(tags);
  };
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

  const handlerImg = () => {
    return (
      <div className={classes.content}>
        <IconButton
          onClick={() => {
            setIsOpenImg(false);
          }}
        >
          <CloseIcon />
        </IconButton>
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
                    onClick={handlerRemove.bind(null, id)}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  };

  //xử lý ảnh
  const [imagesFile, setImagesFile] = useState([]);
  const addImage = (e) => {
    setIsOpenImg(true);
    if (e.target.files) {
      let filesArray = [];
      let imagesFile = [];
      for (let i = 0; i < e.target.files.length; i++) {
        filesArray.push(URL.createObjectURL(e.target.files[i]));
        imagesFile.push(e.target.files[i]);
      }
      setImages((prevImages) => prevImages.concat(filesArray));
      setImagesFile(imagesFile);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  useEffect(() => {
    if (fileInputRef) fileInputRef.current.value = null;
  }, [images]);
  // //xóa
  const handlerRemove = (id) => {
    console.log(imagesFile[0]);
    setImagesFile((oldState) =>
      oldState.filter((item) => item !== oldState[id]),
    );
    setImages((oldState) => oldState.filter((item) => item !== oldState[id]));
  };

  const [alert, setAlert] = useState({
    nameAlert: "",
    message: "",
    open: false,
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ nameAlert: "", message: "", open: false });
  };
  const [info, setInfo] = useState({
    formData: {
      content: "",
    },
  });
  //handler xử lý sự kiện onchange
  const handleChange = (event) => {
    const { formData } = info;
    formData[event.target.name] = event.target.value;
    setInfo({ formData });
  };

  // submit create post
  const onCreatePost = (e) => {
    e.preventDefault();
    //đăng nhập
    const fetchAddPost = async () => {
      try {
        //gửi data
        const formData = new FormData();
        if (imagesFile.length > 0) {
          imagesFile.forEach((item) => {
            formData.append("images", item);
          });
        }
        if (tags.length > 0) {
          tags.forEach((item) => {
            formData.append("tags", item.text);
            console.log(item.text);
          });
        }
        formData.append("content", info.formData.content);
        const response = await newsApi.addPost(formData);
        setAlert({
          nameAlert: "success",
          message: "tạo bài viết thành công",
          open: true,
        });
        return response;
      } catch (error) {
        setAlert({
          nameAlert: "error",
          message: "Error!!!",
          open: true,
        });
      }
    };
    fetchAddPost();
  };

  return (
    <Modal>
      <div className={classes.root}>
        <form onSubmit={onCreatePost}>
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
            </Grid>{" "}
            <div className={classes.mainContent}>
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
                  name="content"
                  onChange={handleChange}
                  variant="outlined"
                />{" "}
              </div>
              <AddTag changeTags={changeTags}></AddTag>
              {isOpenAuction && handlerAuction()}
              {isOpenImg && handlerImg()}
            </div>
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
                type="submit"
                classes={{
                  root: classes.button, // class name, e.g. `classes-nesting-root-x`
                  label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
              >
                Đăng bài
              </Button>
            </Grid>
          </Grid>
        </form>
        {alert.nameAlert && (
          <CustomizedSnackbars
            open={alert.open}
            handleClose={handleClose}
            nameAlert={alert.nameAlert}
            message={alert.message}
          ></CustomizedSnackbars>
        )}
      </div>
    </Modal>
  );
};

export default NewsForm;
