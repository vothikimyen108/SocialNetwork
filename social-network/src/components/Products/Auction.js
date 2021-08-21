import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CustomizedSnackbars from "../UI/CustomizedSnackbars";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3, 0, 0),

    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
      {
        display: "none",
        margin: 80,
      },
  },
  paper: {
    margin: theme.spacing(1, 0, 0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textField: {
    width: "70%",
    height: 48,
    [`& fieldset`]: {
      borderRadius: 25,
      padding: "5px 0",
      border: "2px solid #4a00e0",

      height: 48,
    },
  },
  btIcon: {
    background: "linear-gradient(to right, #8e2de2, #4a00e0)",
    border: 0,
    color: "white",
    height: 58,
    borderRadius: "50%",
    width: "15%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

    background: "linear-gradient(to right, #8e2de2, #4a00e0)",
    borderRadius: 25,
    border: 0,
    color: "white",
    height: 48,
    width: "100%",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
}));

export default function Auction() {
  const classes = useStyles();
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

  return (
    <div className={classes.root}>
      <form onSubmit={handerSubmit}>
        <Grid container>
          <Grid item xs={12}>
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
                  textJustify: "inter-character",
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
          <Grid item xs={12}>
            <Button
              type="submit"
              classes={{
                root: classes.submit, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
              }}
            >
              Đặt giá thầu
            </Button>
          </Grid>
        </Grid>
      </form>
      {renderAlert()}
    </div>
  );
}
