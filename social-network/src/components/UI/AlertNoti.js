import React, { useState, useRef, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
//overlay
import Modal from "./Modal";
//import New
import NewsFormStyles from "../News/NewsFormStyles";
const AlertNoti = (props) => {
  const classes = NewsFormStyles();
  return (
    <Modal>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.center}>
              <h2>Thông báo</h2>

              <IconButton className={classes.close} onClick={props.onClose}>
                <CloseIcon />
              </IconButton>
            </div>
          </Grid>
          <div className={classes.mainContent}>content</div>
        </Grid>
      </div>
    </Modal>
  );
};

export default AlertNoti;
