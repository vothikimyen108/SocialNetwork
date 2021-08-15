import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
const NewsItemStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    border: "1px solid #f0f2f5",
    borderRadius: "20px",
    padding: 20,
    "& span": {
      backgroundColor: "#00",
    },
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
    height: "400px",
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
