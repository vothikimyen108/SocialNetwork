import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import IconButton from "@material-ui/core/IconButton";
import NotificationsButon from "../Notifications/NotificationsButton";
import PeopleIcon from "@material-ui/icons/People";

import LiveTvIcon from "@material-ui/icons/LiveTv";

import SecondNavigationStyles from "./SecondNavigationStyles";

export default function SecondNavigation() {
  const classes = SecondNavigationStyles();

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
      </MenuList>
    </div>
  );
}
