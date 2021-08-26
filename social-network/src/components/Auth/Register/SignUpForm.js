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
import Abc from "./AddressForm";
import PhoneNumber from "./PhoneNumber";
import SlideShow from "../../UI/SlideShow";
//css
import SignUpFormStyles from "./SignUpFormStyles";
const steps = ["chọn ảnh", "địa chỉ", "hoàn tất"];
export default function SignUpForm() {
  const classes = SignUpFormStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const style = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  //img
  const [img, setImg] = useState("");
  const handleChange = (e) => {
    if (e.target.files) {
      let filesArray = "";
      for (let i = 0; i < e.target.files.length; i++) {
        filesArray = URL.createObjectURL(e.target.files[i]);
      }

      setImg((prevImages) => (prevImages = filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
    console.log(e);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className={classes.content}>
            <UploadAvatar
              values={img}
              handleChange={handleChange}
            ></UploadAvatar>
          </div>
        );
      case 1:
        return (
          <div className={classes.content}>
            <Abc></Abc>
          </div>
        );
      case 2:
        return (
          <div className={classes.content}>
            <PhoneNumber></PhoneNumber>
          </div>
        );
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>
            <SlideShow></SlideShow>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.right}>
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
                    <Typography variant="subtitle1">
                      Chúc bạn có những trải nghiệm vui nhất
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
    </React.Fragment>
  );
}
