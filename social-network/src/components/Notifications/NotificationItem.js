import React from "react";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import notificationApi from "../../api/notificationApi";
import { getNoti } from "../../store/notificationSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const NotificationItem = (props) => {
  const { avatar, content, is_seen, created_date, id } = props;
  const dispatch = useDispatch();
  const handlerOnclick = () => {
    const fetchLogin = async () => {
      try {
        const reponse = notificationApi.updateNoti(id);
        //update
        const actionNoTi = getNoti();
        const actionResultNoti = await dispatch(actionNoTi);
        unwrapResult(actionResultNoti);
        return reponse;
      } catch (error) {
        console.log(error);
      }
    };
    fetchLogin();
  };
  return (
    <ListItem
      button
      style={{
        background: `${is_seen === false ? "#C8C8C8" : "transparent"}`,
      }}
      onClick={handlerOnclick}
    >
      <ListItemAvatar>
        <Avatar>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={content}
        secondary={moment(created_date).startOf("minute").fromNow()}
      />
    </ListItem>
  );
};
export default NotificationItem;
