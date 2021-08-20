import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import Productimg from "../../assets/product/product.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useSpring, animated } from "react-spring";
///css
import ProductSlyles from "./ProductSlyles";
export const Product = function TutorCard(props) {
  const styles = ProductSlyles();
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
