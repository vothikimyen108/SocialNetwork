import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Anh from "../../assets/ImgPost/anh1.jpg";
import Anh1 from "../../assets/ImgPost/anh2.jpg";
import Anh2 from "../../assets/ImgPost/anh3.jpg";
import Anh3 from "../../assets/ImgPost/anh4.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-around',
  //   overflow: 'hidden',
  //   backgroundColor: theme.palette.background.paper,
  // },
  imageList: {
    width: "100%",
    height: "400px",
  },
}));

export default function NewsItem(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const itemData = [
    {
      img: `${Anh}`,
      title: "Breakfast",
      author: "jill111",
      featured: true,
    },
    {
      img: `${Anh1}`,
      title: "Tasty burger",
      author: "director90",
    },
    {
      img: `${Anh2}`,
      title: "Camera",
      author: "Danson67",
    },
    {
      img: `${Anh3}`,
      title: "Morning",
      author: "fancycrave1",
      featured: true,
    },
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Võ Yến"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          nay tui đấu giá mấy món ăn tui nấu nha mọi người
        </Typography>
      </CardContent>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem
          key="Subheader"
          cols={2}
          style={{ height: "auto" }}
        ></ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>{" "}
        <span>10</span>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ShareIcon /> */}
          <ChatBubbleIcon></ChatBubbleIcon>
        </IconButton>
        <span>10 bình luận</span>
        <IconButton
          aria-label="share"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
        >
          <ShareIcon />
        </IconButton>
        <span>10 lượt chia sẻ</span>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}
