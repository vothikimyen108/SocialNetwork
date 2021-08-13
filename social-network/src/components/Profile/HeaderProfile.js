import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
//anh
import yen from "../../assets/ImgProfile/avatar.jpg";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
//css
import HeaderProfileStyles, { AntTab } from "./HeaderProfileStyles";

export default function HeaderProfile() {
  const classes = HeaderProfileStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} mt={1}>
          <Paper
            classes={{
              root: classes.paper, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
          ></Paper>
          <Grid item xs={12} className={classes.center}>
            <Avatar alt="Remy Sharp" src={yen} />
            <h1>Võ Yến</h1>
          </Grid>
          <Grid item xs={12} className={classes.info}>
            <div className={classes.infoContent}>
              <span>12</span>
              <span>Bài viết</span>
            </div>
            <div className={classes.infoContent}>
              <span>3</span>
              <span>Đấu giá</span>
            </div>
            <div className={classes.infoContent}>
              <span>20</span>
              <span>Tham gia</span>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.menu}>
            <div className={classes.demo1}>
              <AntTab label="Thông tin" />
              <AntTab label="Ảnh" />
              <AntTab label="Đấu giá" />
              <AntTab label="Chỉnh sửa" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
