import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slide } from "react-slideshow-image";
import Cat from "../../assets/img/cat.svg";
import Upload from "../../assets/img/upload.svg";
import Money from "../../assets/img/money.svg";
import Post from "../../assets/img/post.svg";
import Help from "../../assets/img/help.svg";
//css
import "./SlideShow.css";
import "react-slideshow-image/dist/styles.css";
const useStyles = makeStyles((theme) => ({
  layout: {
    margin: "auto",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
}));

export default function SlideShow() {
  const classes = useStyles();
  const style = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <React.Fragment>
      <div className={classes.layout}>
        <Slide autoplay="on" arrows={false} duration={4500} className="slide">
          <div style={{ ...style }}>
            <div className="top">
              {" "}
              <div className="circle">
                <img src={Cat} alt={Cat} className="img"></img>
              </div>{" "}
            </div>{" "}
            <div className="bottom">
              <h3>Chào mừng Yến</h3>
              <p>Hoàn tất đăng ký, tham gia cùng chúng tôi</p>
            </div>
          </div>
          <div style={{ ...style }}>
            <div className="top">
              <div className="circle">
                <img src={Upload} alt={Cat} className="img"></img>
              </div>
            </div>
            <div className="bottom">
              <h3>Chọn một tấm ảnh xinh xắn của bạn</h3>
              <p>Bạn có thể: Tải ảnh từ máy tính hoặc điện thoại lên.</p>
            </div>
          </div>
          <div style={{ ...style }}>
            <div className="top">
              <div className="circle">
                <img src={Money} alt={Cat} className="img"></img>
              </div>
            </div>
            <div className="bottom">
              <h3>Đấu giá</h3>
              <p>Tham gia đấu giá từ thiện giúp đỡ mọi người</p>
            </div>
          </div>
          <div style={{ ...style }}>
            <div className="top">
              <div className="circle">
                <img src={Post} alt={Cat} className="img"></img>
              </div>
            </div>
            <div className="bottom">
              <h3>Mạng xã hội từ thiện mới nhất</h3>
              <p>Tham gia cùng chúng tôi, giúp đỡ hoàn cảnh khó khăn</p>
            </div>
          </div>
          <div style={{ ...style }}>
            <div className="top">
              <div className="circle">
                <img src={Help} alt={Cat} className="img"></img>
              </div>
            </div>
            <div className="bottom">
              <h3>Mạng xã hội từ thiện mới nhất</h3>
              <p>Tham gia cùng chúng tôi, giúp đỡ hoàn cảnh khó khăn</p>
            </div>
          </div>
        </Slide>
      </div>{" "}
    </React.Fragment>
  );
}
