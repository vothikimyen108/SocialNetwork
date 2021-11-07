import React, { useState } from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, Grid, Typography, Link, Box, Fab } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import FacebookIcon from "@material-ui/icons/Facebook";
import { ReactComponent as GG } from "../../../assets/Login/google.svg";
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
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  //if is insSing bằng true => mở đăng nhập
  const HandlerChange = () => {
    setisSignIn(!isSignIn);
  };
  // đăng ký
  const signup = () => {
    return (
      <Grid container spacing={2} className={classes.signupForm}>
        <Grid item xs={12} sm={6}>
          <TextValidator
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            fullWidth
            id="firstName"
            label="Họ *"
            className={classes.textField}
            validators={["required"]}
            errorMessages={["không để trống dòng này"]}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextValidator
            variant="outlined"
            fullWidth
            id="lastName"
            label="Tên *"
            name="lastName"
            autoComplete="lname"
            className={classes.textField}
            validators={["required"]}
            errorMessages={["không để trống dòng này"]}
          />
        </Grid>
      </Grid>
    );
  };
  //state nhiều biến
  const [info, setInfo] = useState({
    formData: {
      email: "",
      password: "",
    },
  });
  //handler xử lý sự kiện onchange
  const handleChange = (event) => {
    const { formData } = info;
    formData[event.target.name] = event.target.value;
    setInfo({ formData });
  };

  //submit
  const handleSubmit = () => {
    // your submit logic
  };
  //
  const vali = ["required"];
  const errorShow = ["không để trống dòng này"];
  if (!isSignIn) {
    vali.push("matchRegexp:^[A-Za-z0-9\\s]+$");
    vali.push("minStringLength:6");
    errorShow.push("Vui lòng nhập mật khẩu không có ký tự đặc biệt");
    errorShow.push("Tốt thiểu 6 ký tư");
  }
  return (
    <div className={classes.paper}>
      <Typography fontWeight="fontWeightBold" component="h1">
        {" "}
        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={4}>
          {isSignIn ? "Đăng nhập" : "Đăng ký"}
        </Box>
      </Typography>
      <ValidatorForm
        className={classes.form}
        //ref="form"
        onSubmit={handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        {!isSignIn && signup()}
        <TextValidator
          className={classes.textField}
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email *"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
          value={info.formData.email}
          validators={["required", "isEmail"]}
          errorMessages={[
            "không để trống dòng này",
            "vui lòng nhập đúng email",
          ]}
        />
        <TextValidator
          onChange={handleChange}
          value={info.formData.password}
          validators={vali}
          errorMessages={errorShow}
          className={classes.textField}
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Mật Khẩu *"
          id="password"
          autoComplete="current-password"
          type={showPassword ? "text" : "password"} // <-- This is where the magic happens
          // onChange={someChangeHandler}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
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
      </ValidatorForm>
      <Box mt={9}>
        <Copyright />
      </Box>
    </div>
  );
};
export default FormLogin;
