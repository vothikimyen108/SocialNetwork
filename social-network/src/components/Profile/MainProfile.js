import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
//anh
import teams from "../../assets/ImgProfile/cover2.svg";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
    margin: 40,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: 20,
    height: 300,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",

    background: `url(${teams}) `,
    transition: "all .2s",
    // "&:hover": {
    //   boxShadow:
    //     "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    //   transform:
    //     "scale(1.01)" /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */,
    // },
  },
  containerImg: {
    height: " 100%",
    width: "100%",
    objectFit: "cover",
  },
  center: {
    flexWrap: "wrap",
    // flexDirection: "col",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& .MuiAvatar-root": {
      width: 200,
      height: 200,
      position: "absolute",
      top: 250,
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    },
    "& p": {
      color: "grey",
      margin: 0,
    },
  },
  info: {
    flexWrap: "wrap",
    // flexDirection: "col",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& h1": {
      marginTop: 60,
    },
    "& p": {
      color: "grey",
      margin: 10,
      fontSize: 20,
    },
  },
}));
const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontSize: 20,

    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function MainProfile() {
  const classes = useStyles();

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
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item xs={12} className={classes.info}>
            <h1>Võ Yến</h1>
            <p>12 Bài viết 12 Sản phẩm đấu giá</p>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.demo1}>
              <AntTab label="Thông tin" />
              <AntTab label="Ảnh" />
              <AntTab label="Đấu giá" />
              <AntTab label="" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
