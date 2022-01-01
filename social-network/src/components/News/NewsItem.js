import React, { useEffect } from "react";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
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
import Menu from "@material-ui/core/Menu";
import CommentList from "../Comment/CommentList";
import NewsItemStyles from "./NewsItemStyles";
import MenuItem from "@material-ui/core/MenuItem";
import { Product } from "../Products/Product";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ListAuction from "../Products/ListAuction";
import Report from "../Report/Report";
import CustomizedDialogs from "../UI/CustomizedDialogs";
//react
import { useState } from "react";
import newsApi from "../../api/newsApi";
import { set } from "date-fns";

export default function NewsItem(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {
    isExpanded,
    isShowImg,
    isOpenCMT,
    isPageDetail,
    image,
    tags,
    id,
    className,
    avatar,
    like,
    name,
    date,
    product,
    isAution,
    isGo,
    content,
    totalLike,
    totalShare,
    totalComment,
    comment,
    end_date,
    user,
    auction,
  } = props;
  const [totalLike1, setTotalLike1] = useState(totalLike);
  const classes = NewsItemStyles();
  const [expanded, setExpanded] = React.useState(isOpenCMT);
  const [isLike, setIslike] = useState(false);
  const [menuHideMoreAnchorEl, setMenuHide] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const isMenuHideOpen = Boolean(menuHideMoreAnchorEl);
  //mở chỉnh sua báo cáo
  const handleMenuHideClose = () => {
    setMenuHide(null);
  };

  const handleMenuHideOpen = (event) => {
    setMenuHide(event.currentTarget);
  };
  const [report, setReport] = useState(false);
  const handleReport = () => {
    setReport(true);
    handleClickOpen();
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
      <MenuItem onClick={handleReport}>
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
    let totalItemNotShow = image.length - 4;
    let rowHeight = 400;
    if (image.length > 4) {
      rowHeight = 180;
      for (var i = 0; i < 4; i++) {
        if (i === 3) {
          rows.push(
            <ImageListItem key={image[i].id} className={classes.imgItem}>
              {" "}
              <img src={image[i].image_url} alt={image[i].title} />{" "}
              <NavLink to={`/photo/${id}`}>
                <div className={classes.middle}>
                  <div>{totalItemNotShow}+</div>
                </div>
              </NavLink>
            </ImageListItem>,
          );
        } else {
          rows.push(
            <ImageListItem key={image[i].id} className={classes.imgItem}>
              {" "}
              <img src={image[i].image_url} alt={image[i].title} />{" "}
              <NavLink to={`/photo/${id}`}>
                <div className={classes.middle2}></div>
              </NavLink>
            </ImageListItem>,
          );
        }
      }
    } else {
      for (var j = 0; j < image.length; j++) {
        rows.push(
          <ImageListItem key={image[j].id}>
            <img src={image[j].image_url} alt={image[j].title} />{" "}
            <NavLink to={`/photo/${id}`}>
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
        return (
          <div>
            <span>{content}</span>
            <p>
              {" "}
              {tags.map((item) => (
                <Chip
                  variant="outlined"
                  size="small"
                  label={item.content}
                  color="primary"
                />
              ))}
            </p>

            <NavLink to={`/news/${id}`}>Xem thêm</NavLink>
          </div>
        );
      } else {
        return (
          <span>
            {content.substring(0, 100)}{" "}
            <NavLink to={`/news/${id}`}>Xem thêm</NavLink>
          </span>
        );
      }
    }
  };
  //hành động like
  const handlerLike = () => {
    const fetchAddPost = async () => {
      try {
        const response = await newsApi.likePost(id);
        setTotalLike1(response.total_like);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddPost();
    setIslike(!isLike);
  };

  useEffect(() => {
    like.forEach((element) => {
      if (element.user.id === currentUser.id) {
        setIslike(true);
      }
    });
  }, []);
  // setIslike(true);

  return (
    <Card className={`${className} ${classes.root}`}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleMenuHideOpen}>
            <MoreHorizIcon></MoreHorizIcon>
          </IconButton>
        }
        title={name}
        subheader={date}
      />

      <CardContent>
        {product && (
          <Product
            isAution={isAution}
            isGo={isGo}
            product={product}
            end_date={end_date}
            idpost={id}
          ></Product>
        )}

        {product && (
          <ListAuction data={auction} id={id} user={user}></ListAuction>
        )}

        {showContent(content)}
      </CardContent>
      {isShowImg && listTem()}
      <CardActions disableSpacing className={classes.sessionMobie}>
        {" "}
        <span>{totalLike1} Thích</span>
        <span>{totalShare}lượt chia sẻ</span>
        <span>{totalComment} bình luận</span>
      </CardActions>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          style={{ color: isLike ? "red" : "grey" }}
          onClick={handlerLike}
        >
          <FavoriteIcon />
        </IconButton>{" "}
        <span className={classes.sessionDeskTop}>{totalLike1}</span>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ChatBubbleIcon></ChatBubbleIcon>
        </IconButton>
        <span className={classes.sessionDeskTop}>{totalComment} bình luận</span>
        <IconButton
          aria-label="share"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
        >
          <ShareIcon />
        </IconButton>
        <span className={classes.sessionDeskTop}>
          {totalShare} lượt chia sẻ
        </span>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentList dataComment={comment} idPost={id}></CommentList>
        </CardContent>
      </Collapse>
      {renderMenuHide}
      {report && (
        <CustomizedDialogs
          open={open}
          handleClose={handleClose}
          children={<Report report_id={id} object_report={2}></Report>} //post là số 2 coment số 1
        ></CustomizedDialogs>
      )}
    </Card>
  );
}
