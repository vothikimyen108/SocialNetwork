import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Anh } from "../../assets/ImgHome/avatar.svg";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
//css
import NewCommentStyles from "./NewCommentStyles";
import newsApi from "../../api/newsApi";
import { useSelector } from "react-redux";
export default function NewComment(prosp) {
  const classes = NewCommentStyles();
  const { totalCMT, idPost, onChangeToTal } = prosp;
  const currentUser = useSelector((state) => state.user.currentUser);
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
  const onSubmit = (e) => {
    //gửi nguyên trang
    e.preventDefault();
    const fetchAddPost = async () => {
      try {
        const response = await newsApi.addComment(idPost, {
          content: info.formData.content,
        });

        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddPost();
  };
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item className={classes.avatar}>
        <Avatar>{currentUser.avatar}</Avatar>
      </Grid>
      <Grid item xs={12}>
        {" "}
        <form onSubmit={onSubmit}>
          <div className={classes.contentComment}>
            <TextField
              classes={{
                root: classes.inputCMT,
              }}
              multiline
              required
              placeholder="Trả lời bình luận"
              name="content"
              onChange={handleChange}
              inputProps={{
                style: { textAlign: "justify", textJustify: "inter-character" },
              }}
              variant="outlined"
            />
          </div>
          <div className={classes.btEdit}>
            <IconButton
              className={classes.button}
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMenuHideOpen}
              type="submit"
              color="inherit"
            >
              <ArrowForwardIcon></ArrowForwardIcon>
            </IconButton>
          </div>{" "}
        </form>
      </Grid>
    </Grid>
  );
}
