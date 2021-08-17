import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import Productimg from "../../assets/product/product.svg";
import Button from "../UI/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
  },
  button: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
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
}));

export const Product = function TutorCard(props) {
  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
  return (
    <Row
      p={1.5}
      gap={2}
      bgcolor={"#f5f5f5"}
      borderRadius={10}
      key={props.key}
      className={styles.root}
    >
      <Item>
        <Avatar src={Productimg} />
      </Item>
      <Info position={"middle"} useStyles={useTutorInfoStyles}>
        <InfoTitle>Chè khoai môn - khởi điểm: 10k</InfoTitle>
        <InfoSubtitle>hạn chót: 2020-1-1</InfoSubtitle>
      </Info>
      <Item ml={1} position={"right"}>
        <IconButton className={styles.action} classes={iconBtnStyles}>
          <AttachMoneyIcon></AttachMoneyIcon>
        </IconButton>
        <div className={styles.button}>
          <Button></Button>
        </div>
      </Item>
    </Row>
  );
};
