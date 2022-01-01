import React, { useState } from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, Grid, Typography, Box, Fab } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import FacebookIcon from "@material-ui/icons/Facebook";
import { ReactComponent as GG } from "../../../assets/Login/google.svg";
import FormLoginStyles from "./FormLoginStyles";
import userApi from "../../../api/useApi";
import { useHistory, Link } from "react-router-dom";
//google
import GoogleLogin from "react-google-login";
//facebook
import FacebookLogin from "react-facebook-login";
//alert
import CustomizedSnackbars from "../../UI/CustomizedSnackbars";
//cookies
import cookies from "react-cookies";
//redux
import { getMe } from "../../../store/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
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
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ nameAlert: "", message: "", open: false });
  };
  const classes = FormLoginStyles();
  const [isSignIn, setisSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [alert, setAlert] = useState({
    nameAlert: "",
    message: "",
    open: false,
  });

  const callLogin = (username, password) => {
    //đăng nhập
    const fetchLogin = async () => {
      try {
        //gọi từ axios
        // const response = await userApi.login()
        const authInfo = await userApi.getAuthInfo();

        //from data
        const data = {
          password: password,
          username: username,
          grant_type: "password",
          ...authInfo,
        };
        const response = await userApi.login(data);
        //lưu vô cookie
        cookies.save("access-token", response.access_token);
        cookies.save("refresh_token", response.refresh_token);
        const action = getMe();
        const actionResult = await dispatch(action);
        //update thong tin user
        unwrapResult(actionResult);
        setAlert({
          nameAlert: "success",
          message: "tạo thành công tài khoản",
          open: true,
        });
        //chuyen qua trang chu
        history.replace("/");
      } catch (error) {
        console.log(error);
        setAlert({
          nameAlert: "Error",
          message: "Sai email hoặc mật khẩu!!!",
          open: true,
        });
      }
    };
    fetchLogin();
  };

  //login with fb
  const responseFacebook = (response) => {
    const data = new FormData();
    data.append("first_name", response.name);
    data.append("last_name", "");
    data.append("password", response.id);
    data.append("username", response.id);
    let img = response.picture.data.url;
    const fetchSignUp = async () => {
      try {
        //gọi từ axios
        const response1 = await fetch(img);
        // here image is url/location of image
        const blob = await response1.blob();
        const file = new File([blob], "image.jpg", { type: blob.type });
        data.append("avatar", file);
        const response = await userApi.signUp(data);
        //lưu vô cookie
        cookies.save("access-token", response.access_token);
        cookies.save("refresh_token", response.refresh_token);
        const action = getMe();
        const actionResult = await dispatch(action);
        //update thong tin user
        unwrapResult(actionResult);
        console.log(response + "token");
        setAlert({
          nameAlert: "success",
          message: "tạo thành công tài khoản",
          open: true,
        });
        setisSignIn(!isSignIn);
        return response;
      } catch (error) {
        console.log(error.response);
        callLogin(data.get("username"), data.get("password"));
      }
    };
    fetchSignUp();
  };
  //if is insSing bằng true => mở đăng nhập
  const HandlerChange = () => {
    setisSignIn(!isSignIn);
  };
  //dang nhap bang gg
  const responseGoogle = (response) => {
    console.log(response);
    const data = new FormData();
    data.append("first_name", response.mt.IU);
    data.append("last_name", response.mt.ZS);
    data.append("password", response.wa);
    data.append("username", response.mt.Xt);
    data.append("gamil", response.mt.Xt);
    let img = response.mt.nK;
    const fetchSignUp = async () => {
      try {
        //gọi từ axios
        const response1 = await fetch(img);
        // here image is url/location of image
        const blob = await response1.blob();
        const file = new File([blob], "image.jpg", { type: blob.type });
        data.append("avatar", file);
        const response = await userApi.signUp(data);
        callLogin(data.get("username"), data.get("password"));
        setAlert({
          nameAlert: "success",
          message: "đăng nhập thành công",
          open: true,
        });
        setisSignIn(!isSignIn);
        return response;
      } catch (error) {
        callLogin(data.get("username"), data.get("password"));
      }
    };
    fetchSignUp();
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
            onChange={handleChange}
            value={info.formData.firstName}
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
            onChange={handleChange}
            value={info.formData.lastName}
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
      username: "",
      password: "",
      lastName: "",
      firstName: "",
    },
  });
  //handler xử lý sự kiện onchange
  const handleChange = (event) => {
    const { formData } = info;
    formData[event.target.name] = event.target.value;
    setInfo({ formData });
    console.log(formData);
  };

  //submit
  const handleSubmit = (e) => {
    // your submit logic
    //gửi nguyên trang
    e.preventDefault();
    //xư lý đăng ký
    const fetchSignUp = async () => {
      try {
        //gọi từ axios
        //from data
        const data = new FormData();
        data.append("first_name", info.formData.firstName);
        data.append("last_name", info.formData.lastName);
        data.append("password", info.formData.password);
        data.append("username", info.formData.username);
        const response = await userApi.signUp(data);
        setAlert({
          nameAlert: "success",
          message: "tạo thành công tài khoản",
          open: true,
        });
        setisSignIn(!isSignIn);
        return response;
      } catch (error) {
        setAlert({
          nameAlert: "Error",
          message: error.response.data.username,
          open: true,
        });
      }
    };
    if (isSignIn) callLogin(info.formData.username, info.formData.password);
    else fetchSignUp();
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
          name="username"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
          value={info.formData.username}
          // validators={["required", "isEmail"]}
          // errorMessages={[
          //   "không để trống dòng này",
          //   "vui lòng nhập đúng email",
          // ]}
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
              <Link to="/forgotpass" variant="body2">
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
            <GoogleLogin
              clientId="80202530466-8crlsiq64qp2n4r27g0ggelhqcevotb4.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <Fab
                  aria-label="add"
                  color="primary"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <GG></GG>
                </Fab>
              )}
            />
            ,
          </Grid>
          <Grid item className={classes.avatar}>
            <FacebookLogin
              appId="320267436154163"
              autoLoad={true}
              cssClass="btnFacebook"
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              // icon="fa-facebook"
              icon={<FacebookIcon />}
              textButton="&nbsp;&nbsp;"
            />
          </Grid>
        </Grid>
      </ValidatorForm>
      <Box mt={9}>
        <Copyright />
      </Box>
      {alert.nameAlert && (
        <CustomizedSnackbars
          open={alert.open}
          handleClose={handleClose}
          nameAlert={alert.nameAlert}
          message={alert.message}
        ></CustomizedSnackbars>
      )}
    </div>
  );
};
export default FormLogin;