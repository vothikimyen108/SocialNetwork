import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import NotificationItem from "./NotificationItem";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // maxWidth: "100%",
    // backgroundColor: theme.palette.background.paper,
    // overflow: "scroll",
  },
}));

export default function NotificationList() {
  const classes = useStyles();
  const notilist = useSelector((state) => state.noti.noti);
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main">
        <ListItem>
          <Typography
            variant="h6"
            component="h6"
            style={{ textAlign: "center" }}
          >
            Thông báo
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="folders">
        {notilist.results &&
          notilist.results.map((item) => (
            <div key={item.id}>
              <NotificationItem
                avatar={item.user_to.avtatar}
                content={item.content}
                is_seen={item.is_seen}
                created_date={item.created_date}
                id={item.id}
              ></NotificationItem>
            </div>
          ))}
      </List>
    </div>
  );
}
