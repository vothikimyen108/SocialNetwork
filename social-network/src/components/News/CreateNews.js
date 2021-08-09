import React from "react";

import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Anh } from "../../assets/ImgHome/avatar.svg";

import MenuItem from "@material-ui/core/MenuItem";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import TranslateIcon from "@material-ui/icons/Translate";
import IconButton from "@material-ui/core/IconButton";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
//css
import CreateNewsStyles from "./CreateNewsStyles";

export default function CreateNews() {
  const classes = CreateNewsStyles();

  return (
    <Grid container wrap="wrap" className={classes.root}>
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
              placeholder="Bạn đang nghĩ gì vậy?"
              inputProps={{
                readOnly: true,
                style: {
                  textAlign: "justify",
                  textJustify: "inter-character",
                  cursor: "pointer",
                },
              }}
              variant="outlined"
            />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.divider}>
        <div className={classes.divider}></div>
      </Grid>

      <Grid item xs={12} className={classes.navButton}>
        <MenuItem>
          <IconButton
            className={classes.subButton}
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <PhotoLibraryIcon></PhotoLibraryIcon>
          </IconButton>
          <p>Ảnh</p>
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
    </Grid>
  );
}
