import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
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
import NotificationsButon from "./NotificationsButtont";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TranslateIcon from "@material-ui/icons/Translate";

import SecondNavigation from "./SecondNavigation";
import StarsIcon from "@material-ui/icons/Stars";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mainMenu: {
    backgroundColor: "#673ab7",
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
  title: {
    display: "none",
    color: "#7200ca",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",

    borderRadius: 25,
    backgroundColor: "#F5F3F3",
    "&:hover": {
      backgroundColor: "#EFE5E5",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    color: "#7200ca",
    height: "100%",
    position: "absolute",
    // left: "70%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#000",
    [theme.breakpoints.up("md")]: {
      color: "#7200ca",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "20px",

    "& h3": {
      display: " inline",
      marginLeft: "10px",
      fontSize: "15px",
      fontStyle: "normal",
    },
  },
  button: {
    backgroundColor: "#F5F3F3",
    color: "#7200ca",
  },
  subButton: {
    color: "#7200ca",
  },
  logo: {
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      color: "#7200ca",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      id={mobileMenuId}
      PaperProps={{
        style: {
          transform: "translateX(10px) translateY(50px)",
        },
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
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
      <MenuItem>
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

  return (
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
              <Avatar className={classes.green}>
                <Anh></Anh>
              </Avatar>
              <h3> Yến</h3>
            </div>
            <div className={classes.item}>
              <NotificationsButon
                className={classes.button}
              ></NotificationsButon>
            </div>
            <div className={classes.item}>
              <IconButton
                aria-label="show 11 new notifications"
                className={classes.button}
                onClick={handleMobileMenuOpen}
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
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <SecondNavigation mt={10}></SecondNavigation>
    </div>
  );
}
