import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  info: {
    // margin: "0 20px",
    minWidth: "100%",
    boxShadow: "none",
    // borderRadius: 20,
    border: "2px solid",
    borderColor: "#E7EDF3",
    borderRadius: 16,
    transition: "0.4s",
    background: "#fff",
    "&:hover": {
      borderColor: "#5B9FED",
    },
    "& .MuiPaper-elevation1": { border: 0 },
  },
  subButton: {
    color: "#7200ca",
  },
  text: {
    fontWeight: "bold",
  },
});

export default function InfoProfile() {
  const classes = useStyles();

  return (
    <Card className={classes.info}>
      <div>
        <CardContent>
          <Typography variant="h6" component="h2" className={classes.text}>
            Giới thiệu
          </Typography>
        </CardContent>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem>
            <ListItemIcon className={classes.subButton}>
              <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText primary="Sống ở sài gòn" />
          </ListItem>

          <ListItem>
            <ListItemIcon className={classes.subButton}>
              <EmojiPeopleIcon></EmojiPeopleIcon>
            </ListItemIcon>
            <ListItemText primary="18 tuổi" />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.subButton}>
              <EventAvailableIcon></EventAvailableIcon>
            </ListItemIcon>
            <ListItemText primary="Đã tham gia 2 ngày trước" />
          </ListItem>
        </List>
      </div>
    </Card>
  );
}
