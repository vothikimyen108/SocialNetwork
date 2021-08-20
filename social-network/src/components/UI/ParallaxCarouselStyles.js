import { makeStyles } from "@material-ui/core/styles";
const ParallaxCarouselStyles = makeStyles(
  ({ palette, breakpoints, spacing }) => ({
    root: {
      // a must if you want to set arrows, indicator as absolute
      position: "relative",
      width: "100%",
      height: "100%",
    },
    slide: {
      perspective: 1000, // create perspective
      overflow: "hidden",
      // relative is a must if you want to create overlapping layers in children
      position: "relative",
      paddingTop: spacing(8),
      [breakpoints.up("sm")]: {
        paddingTop: spacing(10),
      },
      [breakpoints.up("md")]: {
        paddingTop: spacing(14),
      },
    },
    imageContainer: {
      display: "block",
      position: "relative",
      zIndex: 2,
      paddingBottom: "56.25%",
    },
    image: {
      display: "block",
      position: "absolute",
      zIndex: 10,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      marginLeft: "0%",
      [breakpoints.up("sm")]: {
        marginLeft: "4%",
      },
    },
    arrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: "40px",
      height: "40px",
      backgroundColor: "#e4e6eb",
      color: "#000",
      zIndex: 100,
      "&:hover": {
        backgroundColor: "#e4e6eb",
        color: "#000",
      },
      [breakpoints.up("sm")]: {
        display: "inline-flex",
      },
    },
    arrowLeft: {
      left: 0,
    },
    arrowRight: {
      right: 0,
    },

    indicatorContainer: {
      textAlign: "center",
    },
  }),
);
export default ParallaxCarouselStyles;
