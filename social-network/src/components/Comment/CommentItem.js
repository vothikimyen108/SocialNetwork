import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Anh } from "../../assets/ImgHome/avatar.svg";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
//css
import CommentItemStyles from "./CommentItemStyles";

export default function CommentItem() {
  const classes = CommentItemStyles();
  //set menu hide
  const [menuHideMoreAnchorEl, setMenuHide] = useState(null);

  const isMenuHideOpen = Boolean(menuHideMoreAnchorEl);

  const handleMenuHideClose = () => {
    setMenuHide(null);
  };

  const handleMenuHideOpen = (event) => {
    setMenuHide(event.currentTarget);
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
        <p>Chỉnh sửa</p>
      </MenuItem>

      <MenuItem>
        <p>Báo cáo</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar>
          <Anh></Anh>
        </Avatar>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.contentComment}>
          <Typography className={classes.authorComment}>
            Kim Yến <span>12h</span>
          </Typography>
          <TextField
            classes={{
              root: classes.inputCMT,
            }}
            multiline
            //   rows={Autorenew}
            defaultValue="Truncation should be conditionally applicable on this long line oftext as this is a much longer line than what the container can 
              
            "
            inputProps={{
              readOnly: true,
              style: { textAlign: "justify", textJustify: "inter-character" },
            }}
            variant="outlined"
          />
        </div>

        <div className={classes.btEdit}>
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
        {renderMenuHide}
      </Grid>
    </Grid>
  );
}
