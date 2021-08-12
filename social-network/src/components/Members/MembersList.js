import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//member
import Member from "./Member";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: 20,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    color: theme.palette.text.secondary,
    transition: "all .2s",

    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      transform:
        "scale(1.01)" /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */,
    },
  },
}));

export default function MembersList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} mt={1}>
          <Paper className={classes.paper}>
            <Member></Member>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Member></Member>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Member></Member>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
