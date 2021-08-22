import React, { useRef, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CustomizedSnackbars from "../UI/CustomizedSnackbars";
import Alert from "@material-ui/lab/Alert";
//css
import AutionStyles from "./AutionStyles";
import AlertNoti from "../UI/AlertNoti";

export default function Auction() {
  const classes = AutionStyles();
  const price = 3000;
  const [isError, setIsError] = useState(false);
  //open
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //cờ xem hiện thông báo
  const [isSuccess, setIsSuccess] = useState("");
  // thông báo
  const alert = {
    nameAlert: ["warning", "success"],
    message: [
      "Giá đấu thầu phải lớn hơn hoặc bằng giá ban đầu",
      "Đặt đấu thầu thành công",
    ],
  };
  //hàm hiện thông báo
  const renderAlert = () => {
    console.log(isSuccess);
    if (isSuccess === "success") {
      return (
        <CustomizedSnackbars
          open={open}
          handleClose={handleClose}
          nameAlert={alert.nameAlert[1]}
          message={alert.message[1]}
        ></CustomizedSnackbars>
      );
    }
    if (isSuccess === "warning") {
      return (
        <CustomizedSnackbars
          open={open}
          handleClose={handleClose}
          nameAlert={alert.nameAlert[0]}
          message={alert.message[0]}
        ></CustomizedSnackbars>
      );
    }
  };
  //khai bao cac bien
  const refPrice = useRef(price);
  //hàm tăng
  const handlerAdd = () => {
    refPrice.current.value++;
    if (refPrice.current.value >= price) {
      setIsError(false);
      console.log(isError);
    }
  };
  //hàm giảm
  const handlerRemove = () => {
    console.log(refPrice.current.value);
    if (refPrice.current.value <= price) {
      refPrice.current.value = price;
      setIsSuccess("warning");
      setOpen(true);
    } else {
      refPrice.current.value--;
      setIsError(false);
    }
  };
  //kiểm tra gia tri dau gia
  const handlerPrice = () => {
    if (refPrice.current.value < price) {
      setIsError(true);
      setIsSuccess("warning");
      setOpen(true);
    }
    if (refPrice.current.value >= price) {
      setIsError(false);
      console.log(isError);
      setOpen(false);
    }
  };
  //kiem tra
  const handerSubmit = (event) => {
    //để k chuyển trang
    event.preventDefault();
    //code

    //thông báo
    setIsSuccess("success");
    setOpen(true);
  };
  //ham mow tao bai viet moi
  const handlerOpenNewsForm = () => {
    setNewsForm(true);
  };
  //dong formnews
  const handerClose = () => {
    setNewsForm(false);
  };
  const [openNewsForm, setNewsForm] = useState(false);
  return (
    <div className={classes.root}>
      <form onSubmit={handerSubmit}>
        <Grid container>
          <Grid item xs={12} md={8} className={classes.paper}>
            <IconButton
              aria-label="delete"
              className={classes.btIcon}
              onClick={handlerAdd}
            >
              <AddIcon></AddIcon>
            </IconButton>
            <TextField
              id="outlined-basic"
              error={isError}
              variant="outlined"
              defaultValue={price}
              type="number"
              className={classes.textField}
              inputRef={refPrice}
              onChange={handlerPrice}
              inputProps={{
                style: {
                  textAlign: "center",
                  padding: 13,
                  textJustify: "center",
                  color: "#000",
                },
              }}
            />
            <IconButton
              aria-label="delete"
              className={classes.btIcon}
              onClick={handlerRemove}
            >
              <RemoveIcon></RemoveIcon>
            </IconButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              type="submit"
              classes={{
                root: classes.submit, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
              }}
              onClick={handlerOpenNewsForm}
            >
              Đặt giá thầu
            </Button>
          </Grid>
        </Grid>
      </form>
      {renderAlert()}
      {openNewsForm && <AlertNoti onClose={handerClose}></AlertNoti>}
    </div>
  );
}
