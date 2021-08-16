import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
const NewsItemStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    border: "1px solid #f0f2f5",
    borderRadius: "20px",
    boxShadow: "none",
    padding: 10,
    "& span": {
      backgroundColor: "#00",
    },
    marginBottom: theme.spacing(3),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  avatar: {
    backgroundColor: red[500],
  },
  imageList: {
    width: "100%",
    height: "370px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    flexFlow: "col",
  },

  imgItem: {
    position: "relative",
    height: "100%",
  },
  middle: {
    transition: ".5s ease",
    opacity: "1",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    color: "#fff",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.4)",
    fontSize: 20,
  },
  sessionMobie: {
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "block",
      [`& span:last-child`]: {
        marginRight: "10px",
        float: "right",
      },
      [`& span:nth-child(2)`]: {
        float: "right",
      },
    },
  },
  sessionDeskTop: {
    display: "block",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
export default NewsItemStyles;
