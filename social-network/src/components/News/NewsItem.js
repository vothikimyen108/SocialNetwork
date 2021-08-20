import React from "react";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Anh from "../../assets/ImgPost/anh1.jpg";
import Anh1 from "../../assets/ImgPost/anh2.jpg";
import Anh2 from "../../assets/ImgPost/anh3.jpg";
import Anh3 from "../../assets/ImgPost/anh4.jpg";
import Menu from "@material-ui/core/Menu";
import CommentList from "../Comment/CommentList";
import NewsItemStyles from "./NewsItemStyles";
import MenuItem from "@material-ui/core/MenuItem";
import { Product } from "../Products/Product";
import { NavLink } from "react-router-dom";
//react
import { useState } from "react";

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
  const [isLike, setIslike] = useState(false);
  const isPageDetail = props.isPageDetail;
  const [menuHideMoreAnchorEl, setMenuHide] = useState(null);

  const isMenuHideOpen = Boolean(menuHideMoreAnchorEl);

  //mở chỉnh sua báo cáo
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
        <p>Xóa bài</p>
      </MenuItem>
      <MenuItem>
        <p>Báo cáo</p>
      </MenuItem>
    </Menu>
  );

  //mo rong xem binh luan
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
              {" "}
              <img src={itemData[i].img} alt={itemData[i].title} />{" "}
              <NavLink to="/photo/1">
                <div className={classes.middle}>
                  <div>{totalItemNotShow}+</div>
                </div>
              </NavLink>
            </ImageListItem>,
          );
        } else {
          rows.push(
            <ImageListItem key={itemData[i].id} className={classes.imgItem}>
              {" "}
              <img src={itemData[i].img} alt={itemData[i].title} />{" "}
              <NavLink to="/photo/1">
                <div className={classes.middle2}></div>
              </NavLink>
            </ImageListItem>,
          );
        }
      }
    } else {
      for (var j = 0; j < itemData.length; j++) {
        rows.push(
          <ImageListItem key={itemData[j].id}>
            <img src={itemData[j].img} alt={itemData[j].title} />{" "}
            <NavLink to="/photo/1">
              <div className={classes.middle2}></div>
            </NavLink>
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
    if (isPageDetail === true) {
      return <span>{content}</span>;
    } else {
      if (total < 100) {
        return <span>{content}</span>;
      } else {
        return (
          <span>
            {content.substring(0, 100)}{" "}
            <NavLink to="/news/:1">Xem thêm</NavLink>
          </span>
        );
      }
    }
  };
  //hành động like
  const handlerLike = () => {
    setIslike(!isLike);
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
          <IconButton aria-label="settings" onClick={handleMenuHideOpen}>
            <MoreHorizIcon></MoreHorizIcon>
          </IconButton>
        }
        title={props.name}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Product></Product>
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
        <IconButton
          aria-label="add to favorites"
          style={{ color: isLike ? "red" : "grey" }}
          onClick={handlerLike}
        >
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
      {renderMenuHide}
    </Card>
  );
}
