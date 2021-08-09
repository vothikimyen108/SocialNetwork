import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Anh from "../../assets/ImgPost/anh1.jpg";

import Anh2 from "../../assets/ImgPost/anh3.jpg";
import Anh3 from "../../assets/ImgPost/anh4.jpg";
import NewsItem from "../News/NewsItem";
import "./styles.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Modal from "../UI/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000",
    // height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // position: "relative",
  },

  img: {
    width: "auto",
    height: "100%",
  },
  left: {},
  right: {
    overflow: "scroll",
    width: "auto",
    height: "100vh",
  },
  button: {
    width: "40px",
    height: "40px",
    backgroundColor: "#e4e6eb",
    color: "#000",
    position: "absolute",
    left: "0",
    top: "10px",
    zIndex: 100,
    "&:hover": {
      backgroundColor: "#e4e6eb",
      color: "#000",
    },
  },
}));

const Photo = (props) => {
  const classes = useStyles();
  const slides = [{ img: `${Anh}` }, { img: `${Anh2}` }, { img: `${Anh3}` }];
  return (
    <Modal>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={12} md={8} className={classes.left}>
          <IconButton
            className={classes.button}
            component="span"
            onClick={props.onClose}
          >
            <CloseIcon></CloseIcon>
          </IconButton>
          <Slider className="slider-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className={classes.root}>
                <img src={slide.img} className={classes.img} alt="anh"></img>
              </div>
            ))}
          </Slider>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          elevation={6}
          square
          className={classes.right}
        >
          <NewsItem isOpenCMT={true} isExpanded={false} isShowImg={false}>
            {" "}
          </NewsItem>
        </Grid>
      </Grid>
    </Modal>
  );
};
export default Photo;
