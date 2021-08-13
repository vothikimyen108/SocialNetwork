import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
//anh
import yen from "../../assets/ImgProfile/avatar.jpg";
import teams from "../../assets/ImgProfile/teams.svg";
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
    background: "linear-gradient(to right, #7f00ff, #e100ff)",
    // backgroundImage: `url(${teams})`,
    // backgroundSize: "1000px 300px",
    // backgroundPosition: "right",
    // backgroundRepeat: "no-repeat",
  },
  containerImg: {
    height: " 100%",
    width: "100%",
    objectFit: "cover",
  },
  center: {
    flexWrap: "wrap",
    // flexDirection: "col",
    paddingTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& .MuiAvatar-root": {
      width: 200,
      height: 200,
      position: "absolute",
      top: 240,
      border: "5px solid #fff",
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    },
    "& h1": {
      marginTop: 90,
      color: "#7B1FA2",
      fontWeight: "bold",
    },
  },
  info: {
    flexWrap: "wrap",
    // flexDirection: "col",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  infoContent: {
    padding: 15,
    margin: "0px 32px",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "#fff1ff",
    color: "#000",
    transition: "all .2s",
    "&:hover": {
      background: "#7B1FA2",
      color: "#fff",
      cursor: "pointer",
    },
    "& span": {
      fontSize: 18,
      padding: 5,

      "&:first-child": {
        fontSize: 25,
        fontWeight: "bold",
      },
    },
  },
}));
const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    marginRight: theme.spacing(4),
    fontSize: 20,
    fontWeight: "bold",

    "&:hover": {
      color: "#7B1FA2",
      opacity: 1,
    },
    "&$selected": {
      color: "#7B1FA2",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#7B1FA2",
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
              <span>tham gia</span>
            </div>
          </Grid>
          <Grid item xs={12}>
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
