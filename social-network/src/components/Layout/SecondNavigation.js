import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import IconButton from "@material-ui/core/IconButton";
import NotificationsButon from "./NotificationsButtont";
import PeopleIcon from "@material-ui/icons/People";

import LiveTvIcon from "@material-ui/icons/LiveTv";
const useStyles = makeStyles((theme) => ({
  secondMenu: {
    background: "#fff",
    display: "flex",
    margin: "0",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    borderRadius: 0,
    [theme.breakpoints.up("md")]: {
      height: 280,
      marginTop: 30,
      marginLeft: 30,
      width: 230,
      borderRadius: 20,
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    },
  },
  menuItem: {
    borderBottom: 0,
    [theme.breakpoints.up("md")]: {
      borderBottom: "1px solid  #D1CBCB",
      height: "70px",
      [`&:nth-child(3)`]: {
        borderBottom: 0,
      },
      [`&:last-child`]: {
        display: "none",
      },
    },
  },
  typography: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      padding: "5px",
    },
  },

  menuList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  subButton: {
    color: "#7200ca",
  },
}));

export default function SecondNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.secondMenu}>
      <MenuList className={classes.menuList}>
        <MenuItem className={classes.menuItem}>
          <IconButton
            className={classes.subButton}
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LiveTvIcon></LiveTvIcon>
          </IconButton>
          <p className={classes.typography}>Bảng tin</p>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <IconButton
            className={classes.subButton}
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <PeopleIcon></PeopleIcon>
          </IconButton>
          <p className={classes.typography}>Mọi người</p>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <IconButton
            className={classes.subButton}
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <MonetizationOnIcon />
          </IconButton>
          <p className={classes.typography}>Đấu giá</p>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <NotificationsButon
            className={classes.subButton}
          ></NotificationsButon>
        </MenuItem>
        {/* <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <Typography variant="inherit" className={classes.typography}>
            Đấu giá
          </Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" className={classes.typography}>
            Ảnh
          </Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" className={classes.typography}>
            Trang cá nhân
          </Typography>
        </MenuItem> */}
      </MenuList>
    </div>
  );
}
