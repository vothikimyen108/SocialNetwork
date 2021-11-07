import React from "react";

import Avatar from "@material-ui/core/Avatar";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//css
import MemberStyles from "./MemberStyles";

export default function Member() {
  const classes = MemberStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.center}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <h3>Võ Yến</h3>
        <p>Đã tham gia: 10 ngày</p>
      </Grid>
      <Grid item xs={12} className={classes.button}>
        <div>
          <Button
            variant="contained"
            color="secondary"
            classes={{
              root: classes.submit, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            startIcon={<VisibilityIcon />}
          >
            Xem trang cá nhân
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
