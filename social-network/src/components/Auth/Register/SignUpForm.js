import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UploadAvatar from "./UploadAvatar";
import AddressForm from "./AddressForm";
import PhoneNumber from "./PhoneNumberForm";
import SlideShow from "../../UI/SlideShow";
//alert
import CustomizedSnackbars from "../../UI/CustomizedSnackbars";
//css
import SignUpFormStyles from "./SignUpFormStyles";
import { ValidatorForm } from "react-material-ui-form-validator";
//redux
import { useDispatch } from "react-redux";
import userApi from "../../../api/useApi";
import { getMe } from "./../../../store/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
//khai báo các bước đăng ký hoàn tất
const steps = ["chọn ảnh", "địa chỉ", "hoàn tất"];
export default function SignUpForm(props) {
  const classes = SignUpFormStyles();
  const [alert, setAlert] = useState({
    nameAlert: "",
    message: "",
    open: false,
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ nameAlert: "", message: "", open: false });
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    //nếu xảy ra lỗi thì k đi tới các bước khác
    form.isFormValid(false).then((isValid) => {
      if (isValid) {
        // if (activeStep < 2) {
        setActiveStep(activeStep + 1);
        // }
      }
    });
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  //code
  const [state, setState] = useState({
    province: "",
    district: "",
    ward: "",
    address: "",
    gender: "",
    birthday: "",
    phone: "",
    avatar: "",
  });
  //khai báo các trường cần thiết
  const { province, district, ward, address, gender, birthday, phone, avatar } =
    state;
  const values = {
    province,
    district,
    ward,
    address,
    gender,
    birthday,
    phone,
    avatar,
  };
  const [avatarFile, setAvatarFile] = useState("");
  //hàm xử lý onchange
  const handleChangeAll = (input) => (e) => {
    if (input === "birthday") {
      setState({ ...state, [input]: e });
    } else if (input === "avatar") {
      //xử lý lưu ảnh hiện ảnh
      if (e.target.files) {
        let filesArray = "";
        for (let i = 0; i < e.target.files.length; i++) {
          filesArray = URL.createObjectURL(e.target.files[i]);
        }
        setState({ ...state, [input]: filesArray });
        setAvatarFile(e.target.files[0]);
        Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
      }
    } else if (input === "province") {
      setState({ ...state, [input]: e.target.value, ward: "", district: "" });
    } else if (input === "district") {
      setState({ ...state, [input]: e.target.value, ward: "" });
    } else {
      setState({ ...state, [input]: e.target.value });
    }
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className={classes.content}>
            <UploadAvatar
              values={values}
              handleChange={handleChangeAll}
            ></UploadAvatar>
          </div>
        );
      case 1:
        return (
          <div className={classes.content}>
            <AddressForm
              handleChange={handleChangeAll}
              values={values}
            ></AddressForm>
          </div>
        );
      case 2:
        return (
          <div className={classes.content}>
            <PhoneNumber
              handleChange={handleChangeAll}
              values={values}
            ></PhoneNumber>
          </div>
        );
      default:
        throw new Error("Unknown step");
    }
  }
  //khai báo form ban đầu rỗng
  let form = null;
  //sử dung dispatch redux
  const dispatch = useDispatch();

  const handleRegister = () => {
    //đăng nhập
    const fetchLogin = async () => {
      try {
        //gửi data
        const formData = new FormData();
        let address =
          state.address +
          ", " +
          state.ward +
          ", " +
          state.district.name +
          ", " +
          state.province.name;
        formData.append("avatar", avatarFile);
        formData.append("address", address);
        formData.append("phone_number", state.phone);
        formData.append("gender", state.gender);
        formData.append("birthday", state.birthday.toLocaleDateString("en-CA"));
        const response = await userApi.updateUser(formData);
        const action = getMe();
        const actionResult = await dispatch(action);
        unwrapResult(actionResult);
        setAlert({
          nameAlert: "success",
          message: "tạo thành công tài khoản",
          open: true,
        });
        return response;
      } catch (error) {
        setAlert({
          nameAlert: "Error",
          message: "Error!!!",
          open: true,
        });
      }
    };

    if (activeStep === 3) fetchLogin();
  };
  return (
    <ValidatorForm
      className={classes.form}
      ref={(r) => {
        form = r;
      }}
      instantValidate
      onSubmit={handleRegister}
    >
      <Grid container className={classes.test}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <SlideShow></SlideShow>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.right}>
          <CssBaseline></CssBaseline>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <h2>Hoàn tất đăng ký</h2>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Cảm ơn bạn đã tham gia
                    </Typography>
                    <Typography variant="subtitle1" m={1}>
                      Chúc bạn có những trải nghiệm vui nhất{" "}
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={handleBack}
                          classes={{
                            root: classes.submitBack, // class name, e.g. `classes-nesting-root-x`
                            label: classes.label, // class name, e.g. `classes-nesting-label-x`
                          }}
                        >
                          quay lại
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleNext}
                        classes={{
                          root: classes.submit, // class name, e.g. `classes-nesting-root-x`
                          label: classes.label, // class name, e.g. `classes-nesting-label-x`
                        }}
                      >
                        {activeStep === steps.length - 1
                          ? "xác nhận"
                          : "tiếp tục"}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </main>
        </Grid>
      </Grid>
      {alert.nameAlert && (
        <CustomizedSnackbars
          open={alert.open}
          handleClose={handleClose}
          nameAlert={alert.nameAlert}
          message={alert.message}
        ></CustomizedSnackbars>
      )}
    </ValidatorForm>
  );
}
