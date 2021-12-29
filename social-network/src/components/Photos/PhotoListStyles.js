import { makeStyles } from "@material-ui/core/styles";


const PhotoListStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "100%",
    height: "auto",
  },
}));
export default PhotoListStyles;
