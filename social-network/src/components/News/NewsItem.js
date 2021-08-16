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
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Anh from "../../assets/ImgPost/anh1.jpg";
import Anh1 from "../../assets/ImgPost/anh2.jpg";
import Anh2 from "../../assets/ImgPost/anh3.jpg";
import Anh3 from "../../assets/ImgPost/anh4.jpg";

import CommentList from "../Comment/CommentList";
import NewsItemStyles from "./NewsItemStyles";

import { Product } from "../Products/Product";
const itemData = [
  {
    id: 1,
    img: `${Anh}`,
    title: "Breakfast",
    author: "jill111",
    featured: true,
  },
  {
    id: 2,
    img: `${Anh1}`,
    title: "Tasty burger",
    author: "director90",
  },
  {
    id: 3,
    img: `${Anh2}`,
    title: "Camera",
    author: "Danson67",
  },
  {
    id: 4,
    img: `${Anh3}`,
    title: "Morning",
    author: "fancycrave1",
    featured: true,
  },
  {
    id: 5,
    img: `${Anh}`,
    title: "Breakfast",
    author: "jill111",
    featured: true,
  },
  {
    id: 6,
    img: `${Anh1}`,
    title: "Tasty burger",
    author: "director90",
  },
];
//css

export default function NewsItem(props) {
  const classes = NewsItemStyles();
  const isExpanded = props.isExpanded;
  const isShowImg = props.isShowImg;
  const [expanded, setExpanded] = React.useState(props.isOpenCMT);

  const handleExpandClick = () => {
    if (isExpanded) {
      setExpanded(!expanded);
    }
  };

  const listTem = () => {
    var rows = [];
    let totalItemNotShow = itemData.length - 4;
    let rowHeight = 400;
    if (itemData.length > 4) {
      rowHeight = 180;
      for (var i = 0; i < 4; i++) {
        if (i === 3) {
          rows.push(
            <ImageListItem key={itemData[i].id} className={classes.imgItem}>
              <img src={itemData[i].img} alt={itemData[i].title} />
              <div className={classes.middle}>
                <div>{totalItemNotShow}+</div>
              </div>
            </ImageListItem>,
          );
        } else {
          rows.push(
            <ImageListItem key={itemData[i].id} className={classes.imgItem}>
              <img src={itemData[i].img} alt={itemData[i].title} />
            </ImageListItem>,
          );
        }
      }
    } else {
      for (var j = 0; j < itemData.length; j++) {
        rows.push(
          <ImageListItem key={itemData[j].id}>
            <img src={itemData[j].img} alt={itemData[j].title} />
          </ImageListItem>,
        );
      }
    }

    //ketqua
    return (
      <ImageList rowHeight={rowHeight} className={classes.imageList}>
        {rows}
      </ImageList>
    );
  };
  //show text
  const showContent = (content) => {
    let total = content.split(" ").length;
    if (total < 100) {
      return <span>{content}</span>;
    } else {
      return (
        <span>
          {content.substring(0, 100)} <a href="#">xem thêm</a>
        </span>
      );
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
        {/* <span className={classes.content}>{props.content}</span> */}
        <Product></Product>
        {/* <span className={classes.content}>{props.content}</span> */}
        {showContent(props.content)}
      </CardContent>
      {isShowImg && listTem()}
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
          {props.totalComment} bình luận
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
