import React, { useState } from "react";

import {
  Button,
  Grid,
  TextField,
  Typography,
  Link,
  Box,
  Fab,
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import { ReactComponent as GG } from "../../assets/Login/google.svg";
import FormLoginStyles from "./FormLoginStyles";

//lấy năm hiện tại
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Bản quyền thuộc về © "}
      <Link color="inherit" href="https://material-ui.com/">
        AnTam
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const FormLogin = function FormLogin() {
  const classes = FormLoginStyles();
  const [isSignIn, setisSignIn] = useState(true);
  const [selectedDate, handleDateChange] = useState(new Date());
  //if is insSing bằng true => mở đăng nhập
  const HandlerChange = () => {
    setisSignIn(!isSignIn);
  };
  // đăng ký
  const signup = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            className={classes.textField}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            className={classes.textField}
          />
        </Grid>
      </Grid>
    );
  };
  return (
    <div className={classes.paper}>
      <Typography fontWeight="fontWeightBold" component="h1">
        {" "}
        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={4}>
          {isSignIn ? "Đăng nhập" : "Đăng ký"}
        </Box>
      </Typography>
      <form className={classes.form} noValidate>
        {!isSignIn && signup()}
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Mật Khẩu"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          classes={{
            root: classes.submit, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
        >
          {isSignIn ? "Đăng nhập" : "Tạo tài khoản mới"}
        </Button>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          {isSignIn && (
            <Grid item className={classes.avatar}>
              <Link href="#" variant="body2">
                Quên mật khẩu?
              </Link>
            </Grid>
          )}

          <Grid item className={classes.avatar}>
            <Link variant="body2" onClick={HandlerChange}>
              {isSignIn ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
            </Link>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} className={classes.center}>
            <Typography color="textSecondary">Hoặc tiếp tục bằng</Typography>
          </Grid>
          <Grid item className={classes.avatar}>
            <Fab aria-label="add" color="primary">
              <GG></GG>
            </Fab>
          </Grid>
          <Grid item className={classes.avatar}>
            <Fab color="primary" aria-label="add">
              <FacebookIcon />
            </Fab>
          </Grid>
        </Grid>
      </form>

      <Box mt={9}>
        <Copyright />
      </Box>
    </div>
  );
};
export default FormLogin;
