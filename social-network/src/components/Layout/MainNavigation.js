import React from "react";

import { ReactComponent as Anh } from "../../assets/ImgHome/avatar.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import NotificationsButon from "../Notifications/NotificationsButton";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TranslateIcon from "@material-ui/icons/Translate";
import StarsIcon from "@material-ui/icons/Stars";
import MainNavigationStyles from "./MainNavigationStyles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NotificationList from "../Notifications/NotificationList";
import uiActions from "../../store/userSlice";
import { useHistory } from "react-router";

export default function MainNavigation() {
  const classes = MainNavigationStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  //set menu hide
  const [menuHideMoreAnchorEl, setMenuHide] = useState(null);

  const isMenuHideOpen = Boolean(menuHideMoreAnchorEl);

  const handleMenuHideClose = () => {
    setMenuHide(null);
  };

  const handleMenuHideOpen = (event) => {
    setMenuHide(event.currentTarget);
  };

  const onLogout = () => {
    dispatch(uiActions.actions.logout());
    history.replace("/login");
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMenuHide = (
    <Menu
      anchorEl={menuHideMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      id={mobileMenuId}
      PaperProps={{
        style: {
          transform: "translateX(10px) translateY(50px)",
        },
      }}
      open={isMenuHideOpen}
      onClose={handleMenuHideClose}
      keepMounted={false}
    >
      <MenuItem>
        <IconButton
          className={classes.subButton}
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle></AccountCircle>
        </IconButton>
        <p>Trang cá nhân</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          className={classes.subButton}
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <TranslateIcon></TranslateIcon>
        </IconButton>
        <p>ngôn ngữ và màn hình</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          className={classes.subButton}
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SettingsIcon></SettingsIcon>
        </IconButton>
        <p>cài đặt</p>
      </MenuItem>
      <MenuItem onClick={onLogout}>
        <IconButton
          className={classes.subButton}
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToAppIcon></ExitToAppIcon>
        </IconButton>
        <p>Đăng xuất</p>
      </MenuItem>
    </Menu>
  );
  //set noti
  const [notiMoreAnchorEl, setNoti] = useState(null);

  const isNotiOpen = Boolean(notiMoreAnchorEl);

  const handlerNotiMenuClose = () => {
    setNoti(null);
  };

  const handleNotiMenuOpen = (event) => {
    setNoti(event.currentTarget);
  };

  const renderNoti = (
    <Menu
      anchorEl={notiMoreAnchorEl}
      id={mobileMenuId}
      PaperProps={{
        style: {
          transform: "translateX(10px) translateY(50px)",
          maxHeight: "60h",
          width: "40ch",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
          },
        },
      }}
      open={isNotiOpen}
      onClose={handlerNotiMenuClose}
      keepMounted={false}
    >
      <NotificationList></NotificationList>
    </Menu>
  );
  //thong tin user
  const currentUser = useSelector((state) => state.user.currentUser);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className={classes.main}>
      <div className={classes.grow}>
        <AppBar
          classes={{
            root: classes.mainMenu, // class name, e.g. `classes-nesting-root-x`
          }}
          position="static"
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <StarsIcon className={classes.logo}></StarsIcon>
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              AnTam
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tìm kiếm..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className={classes.item}>
                <Avatar
                  className={classes.green}
                  src={currentUser.avatar}
                ></Avatar>
                <h3>
                  {currentUser.first_name} {currentUser.last_name}
                </h3>
              </div>
              <div className={classes.item}>
                <NotificationsButon
                  className={classes.button}
                  onClick={handleNotiMenuOpen}
                ></NotificationsButon>
              </div>
              <div className={classes.item}>
                <IconButton
                  aria-label="show 11 new notifications"
                  className={classes.button}
                  onClick={handleMenuHideOpen}
                >
                  <ExpandMoreIcon fontSize="medium"></ExpandMoreIcon>
                </IconButton>
              </div>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMenuHideOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenuHide}
        {renderNoti}
      </div>
    </div>
  );
}
