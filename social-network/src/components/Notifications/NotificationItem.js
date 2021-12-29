import React from "react";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
import Avatar from "@material-ui/core/Avatar";
const NotificationItem = (props) => {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Nội dung" secondary="Jan 9, 2014" />
    </ListItem>
  );
};
export default NotificationItem;
