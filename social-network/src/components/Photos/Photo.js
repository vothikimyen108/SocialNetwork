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
//css
import PhotoStyles from "./PhotoStyles";
import moment from "moment";
const Photo = (props) => {
  const classes = PhotoStyles();
  const data = [
    { image: `${Anh}`, id: 1 },
    { image: `${Anh2}`, id: 2 },
    { image: `${Anh3}`, id: 3 },
  ];
  const { item } = props;

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
          <ParallaxCarousel data={item.image}></ParallaxCarousel>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} className={classes.right}>
          <NewsItem
            id={item.id}
            className={classes.border}
            avatar={item.avatar}
            name={item.user.first_name + item.user.last_name}
            content={item.content}
            totalLike={item.total_like}
            totalShare={item.totalShare}
            totalComment={item.total_comment}
            tags={item.tags}
            date={moment(item.created_date).startOf("minute").fromNow()}
            open={props.open}
            image={item.image}
            product={item.product}
            like={item.like}
            comment={item.comment}
            end_date={item.end_date}
            isAution={true}
            isGo={false}
            isOpenCMT={true}
            isExpanded={false}
            isShowImg={false}
            isPageDetail={true}
          >
            {" "}
          </NewsItem>
        </Grid>
      </Grid>
    </ModalFull>
  );
};
export default Photo;
