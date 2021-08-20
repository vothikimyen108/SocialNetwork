import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Anh from "../../assets/ImgPost/anh1.jpg";

import Anh2 from "../../assets/ImgPost/anh3.jpg";
import Anh3 from "../../assets/ImgPost/anh4.jpg";
import NewsItem from "../News/NewsItem";
import CssBaseline from "@material-ui/core/CssBaseline";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import ModalFull from "../UI/ModalFull";
import ParallaxCarousel from "../UI/ParallaxCarousel";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  img: {
    width: "auto",
    height: "100%",
  },
  left: {
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "50%",
    },

    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },
  },
  right: {
    overflow: "auto",
    width: "auto",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "50%",
    },

    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },
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
    <ModalFull>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={12} lg={8} className={classes.left}>
          <IconButton
            className={classes.button}
            component="span"
            onClick={props.onClose}
          >
            <CloseIcon></CloseIcon>
          </IconButton>
          <ParallaxCarousel></ParallaxCarousel>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} className={classes.right}>
          <NewsItem
            isOpenCMT={true}
            isExpanded={false}
            isShowImg={false}
            key={props.item.id}
            avatar={props.item.avatar}
            name={props.item.name}
            content={props.item.content}
            totalLike={props.item.totalLike}
            totalShare={props.item.totalShare}
            totalComment={props.item.totalComment}
          >
            {" "}
          </NewsItem>
        </Grid>
      </Grid>
    </ModalFull>
  );
};
export default Photo;
