import React from "react";

import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Anh } from "../../assets/ImgHome/avatar.svg";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
//css
import NewCommentStyles from "./NewCommentStyles";

export default function NewComment() {
  const classes = NewCommentStyles();

  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item className={classes.avatar}>
        <Avatar>
          <Anh></Anh>
        </Avatar>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.contentComment}>
          <TextField
            classes={{
              root: classes.inputCMT,
            }}
            multiline
            //   rows={Autorenew}
            placeholder="Trả lời bình luận"
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
            color="inherit"
          >
            <ArrowForwardIcon></ArrowForwardIcon>
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
}
