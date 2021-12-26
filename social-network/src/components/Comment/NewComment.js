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
export default function NewComment(prosp) {
  const classes = NewCommentStyles();
  const { totalCMT, idPost, onChangeToTal } = prosp;
  const [comment, setComment] = useState({ content: "", total: "" });
  //handler xử lý sự kiện onchange
  const handleChange = (event) => {
    setComment((pre) => {
      content: event.target.value;
    });
  };
  const onSubmit = () => {
    const fetchAddPost = async () => {
      try {
        const response = await newsApi.addComment(idPost, comment);

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
        <Avatar>
          <Anh></Anh>
        </Avatar>
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
