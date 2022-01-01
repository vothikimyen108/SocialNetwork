import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const NotificationsButon = (props) => {
  const notilist = useSelector((state) => state.noti.noti);
  var [countIsSeem, setCountIsSeem] = useState(0);
  useEffect(() => {
    for (let item in notilist.results) {
      if (item.is_seen === true) setCountIsSeem((pre) => pre + 1);
    }
  }, [notilist]);
  return (
    <IconButton
      aria-label="show 11 new notifications"
      className={props.className}
      onClick={props.onClick}
    >
      <Badge badgeContent={countIsSeem} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};
export default NotificationsButon;
