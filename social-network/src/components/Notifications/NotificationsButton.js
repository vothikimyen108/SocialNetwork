import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
const NotificationsButon = (props) => {
  return (
    <IconButton
      aria-label="show 11 new notifications"
      className={props.className}
      onClick={props.onClick}
    >
      <Badge badgeContent={17} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};
export default NotificationsButon;
