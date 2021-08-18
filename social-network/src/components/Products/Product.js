import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import Productimg from "../../assets/product/product.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useSpring, animated } from "react-spring";
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  button: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "inline",
    },
  },
  go: {
    margin: 5,
    "&:last-of-type": {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "grey",
    },
  },
  action: {
    backgroundColor: "#fff",
    display: "block",
    color: "#7200ca",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  text: {
    // display: "inline",
    margin: 0,
    paddingRight: 10,
    color: "grey",
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "inline",
    },
  },
}));

export const Product = function TutorCard(props) {
  const styles = useStyles();
  //animate
  const stylesSpring = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 20 },
  });

  return (
    <Row
      p={1.5}
      gap={2}
      bgcolor={"#f5f5f5"}
      borderRadius={10}
      key={props.key}
      className={styles.root}
    >
      <Item className={styles.go}>
        <Avatar src={Productimg} />
      </Item>
      <Info
        position={"middle"}
        useStyles={useTutorInfoStyles}
        className={styles.go}
      >
        <InfoTitle>Chè khoai môn - khởi điểm: 10k</InfoTitle>
        <InfoSubtitle>hạn chót: 2020-1-1</InfoSubtitle>
      </Info>
      <Item position={"middle"} className={styles.go}>
        {/* <IconButton className={styles.action} classes={iconBtnStyles}>
          <AttachMoneyIcon></AttachMoneyIcon>
        </IconButton> */}
        {/* <div className={styles.button}> */}
        <p className={styles.text}>đi đấu giá</p>
        <animated.div
          style={{
            ...stylesSpring,
          }}
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </animated.div>

        {/* </div> */}
      </Item>
    </Row>
  );
};
