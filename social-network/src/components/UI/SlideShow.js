import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slide } from "react-slideshow-image";
import Cat from "../../assets/img/cat.svg";
import Upload from "../../assets/img/upload.svg";
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
        <Slide autoplay="on" arrows={false} duration={3000} className="slide">
          <div style={{ ...style }}>
            <div className="top">
              {" "}
              <div className="circle">
                <img src={Cat} alt={Cat} className="img"></img>
              </div>{" "}
            </div>{" "}
            <div className="bottom">
              <h3>Chào mừng bạn</h3>
              <p>Hoan tat dang ky nhe</p>
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
              <p>Hoan tat dang ky nhe</p>
            </div>
          </div>
        </Slide>
      </div>{" "}
    </React.Fragment>
  );
}
