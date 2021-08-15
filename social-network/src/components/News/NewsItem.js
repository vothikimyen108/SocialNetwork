import React from "react";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
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

import CommentList from "../Comment/CommentList";

//css
import NewsItemStyles from "./NewsItemStyles";
export default function NewsItem(props) {
  const classes = NewsItemStyles();
  const isExpanded = props.isExpanded;
  const isShowImg = props.isShowImg;
  const [expanded, setExpanded] = React.useState(props.isOpenCMT);
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
    if (isExpanded) {
      setExpanded(!expanded);
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="h6" component="h3">
          {props.content}
        </Typography>
      </CardContent>
      {isShowImg && (
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
      )}
      <CardActions disableSpacing className={classes.sessionMobie}>
        {" "}
        <span>{props.totalLike} Thích</span>
        <span>{props.totalShare}lượt chia sẻ</span>
        <span>{props.totalComment} bình luận</span>
      </CardActions>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>{" "}
        <span className={classes.sessionDeskTop}>{props.totalLike}</span>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ChatBubbleIcon></ChatBubbleIcon>
        </IconButton>
        <span className={classes.sessionDeskTop}>
          {props.totalShare}
          {props.totalComment}bình luận
        </span>
        <IconButton
          aria-label="share"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
        >
          <ShareIcon />
        </IconButton>
        <span className={classes.sessionDeskTop}>
          {props.totalShare} lượt chia sẻ
        </span>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentList></CommentList>
        </CardContent>
      </Collapse>
    </Card>
  );
}
