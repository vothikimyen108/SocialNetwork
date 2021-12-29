import { useHistory, Link } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import React, { useState } from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, Grid, Typography, Box, Fab } from "@material-ui/core";
import CustomizedSnackbars from "../components/UI/CustomizedSnackbars";
import FacebookIcon from "@material-ui/icons/Facebook";
import FormLoginStyles from "../components/Auth/Login/FormLoginStyles";
import userApi from "../api/useApi";

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
const ForgotPass = (props) => {
  const history = useHistory();

  //quay lai trag tuoc do
  const handerCloseIsopenPhoto = () => {
    history.goBack();
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ nameAlert: "", message: "", open: false });
  };
  const [alert, setAlert] = useState({
    nameAlert: "",
    message: "",
    open: false,
  });
  const classes = FormLoginStyles();
  const [info, setInfo] = useState({
    formData: {
      username: "",
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
    const fetchGetPass = async () => {
      try {
        //gọi từ axios
        const response = await userApi.changeNewPass(info.formData.username);
        setAlert({
          nameAlert: "success",
          message: "Gửi mật khẩu mới thành công, vui lòng kiểm tra email",
          open: true,
        });
        return response;
      } catch (error) {
        console.log(error.response.data);
        setAlert({
          nameAlert: "Error",
          message: error.response.data,
          open: true,
        });
      }
    };
    fetchGetPass();
    //xư lý đăng ký
  };
  return (
    <div className={classes.paperCenter}>
      <div
        className={classes.paper}
        style={{
          width: "30%",
          background: "#fff",
          padding: 50,
          borderRadius: 20,
        }}
      >
        <Typography fontWeight="fontWeightBold" component="h1">
          {" "}
          Quên mật khẩu? Vui lòng nhập tên người dùng hoặc địa chỉ email của
          bạn. Bạn sẽ nhận được một liên kết để tạo mật khẩu mới qua email
        </Typography>
        <ValidatorForm
          className={classes.form}
          //ref="form"
          onSubmit={handleSubmit}
          onError={(errors) => console.log(errors)}
        >
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
            validators={["required", "isEmail"]}
            errorMessages={[
              "không để trống dòng này",
              "vui lòng nhập đúng email",
            ]}
          />
          <Grid item className={classes.avatar}>
            <Link
              to="/login"
              activeClassName={classes.activeLink}
              className={classes.navlink}
            >
              Nhớ mật khẩu?
            </Link>
          </Grid>
          <Button
            type="submit"
            classes={{
              root: classes.submit, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
          >
            {"Gửi"}
          </Button>
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
    </div>
  );
};

export default ForgotPass;
