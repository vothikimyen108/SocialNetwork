import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
//anh
import yen from "../../assets/ImgProfile/avatar.jpg";

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
            <h2>Võ Yến</h2>
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
              <AntTab label="Bài viết" />
              <AntTab label="Thông tin" />
              <AntTab label="Ảnh" />
              <AntTab label="Đấu giá" />
              <AntTab label="Chỉnh sửa" />
            </div>
          </Grid>
          {/* <Grid item xs={12} className={classes.menu}>
            <Grid container>
              <Grid item lg={3}>
                <InfoProfile></InfoProfile>
              </Grid>
              <Grid item lg={9}>
                {/* <InfoProfile></InfoProfile> */}
          {/* </Grid>
            </Grid>
          </Grid> */}{" "}
        </Grid>
      </Grid>
    </div>
  );
}
