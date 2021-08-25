import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Cat from "../../assets/img/cat.svg";
import Upload from "../../assets/img/upload.svg";
import "./css.css";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import UploadAvatar from "./UploadAvatar";
import Abc from "./abc";
const useStyles = makeStyles((theme) => ({
  paper: {
    height: 600,
    boxShadow: "none",
    padding: theme.spacing(2),
    margin: "auto",
    textAlign: "center",
    // borderRight: "1px solid #000",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(6),
      // marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  layout: {
    margin: "auto",
    textAlign: "center",
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["chọn ảnh", "hoàn tất", "kết thúc"];

export default function SignUpForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const style = {
    textAlign: "center",
    // padding: "200px 0",
    // fontSize: "30px",
    // width: "100%",
    // height: "100%",
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
          <UploadAvatar values={img} handleChange={handleChange}></UploadAvatar>
        );
      case 1:
        return <h1>hh</h1>;
      case 2:
        return <Abc></Abc>;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <main className={classes.layout}>
            {" "}
            <Paper className={classes.paper}>
              <div className={classes.layout}>
                <Slide
                  autoplay="on"
                  arrows={false}
                  duration={3000}
                  className="slide"
                >
                  <div style={{ ...style }}>
                    <div className="top">
                      {" "}
                      <div className="circle">
                        <img src={Cat} alt={Cat} className="img"></img>
                      </div>{" "}
                    </div>{" "}
                    <div className="bottom">
                      <h3>Chào mừng bạn</h3>
                      <p>Hoan tat dang ky nhe</p>
                    </div>
                  </div>
                  <div style={{ ...style }}>
                    <div className="top">
                      <div className="circle">
                        <img src={Upload} alt={Cat} className="img"></img>
                      </div>
                    </div>
                    <div className="bottom">
                      <h3>Chọn một tấm ảnh xinh xắn của bạn</h3>
                      <p>Hoan tat dang ky nhe</p>
                    </div>
                  </div>
                </Slide>
              </div>{" "}
            </Paper>
          </main>
        </Grid>{" "}
        <CssBaseline />
        <Grid item xs={12} sm={6} md={6}>
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
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "Place order"
                          : "Next"}
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
// import React, { Fragment, useState } from "react";
// import { DatePicker } from "@material-ui/pickers";

// function BasicDatePicker(props) {
//   const [selectedDate, handleDateChange] = useState(new Date());

//   return (
//     <Fragment>
//       <DatePicker
//         label="Basic example"
//         value={selectedDate}
//         onChange={handleDateChange}
//         animateYearScrolling
//       />

//       <DatePicker
//         autoOk
//         label="Clearable"
//         clearable
//         disableFuture
//         value={selectedDate}
//         onChange={handleDateChange}
//       />

//       <DatePicker
//         disableFuture
//         openTo="year"
//         format="dd/MM/yyyy"
//         label="Date of birth"
//         views={["year", "month", "date"]}
//         value={selectedDate}
//         onChange={handleDateChange}
//       />
//     </Fragment>
//   );
// }

// export default BasicDatePicker;

// const style = {
//   textAlign: "center",
//   // padding: "200px 0",
//   // fontSize: "30px",
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// };
// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Slide autoplay="on" arrows={false} duration={1000} className="slide">
//         <div style={{ ...style }}>
//           <div className="top">
//             {" "}
//             <div class="circle">
//               <img src={Cat} alt={Cat} className="img"></img>
//             </div>
//           </div>
//           <div className="bottom">
//             <h3>Chào mừng bạn</h3>
//             <p>Hoang tat dang ky nhe</p>
//           </div>
//         </div>
//         <div style={{ ...style }}>
//           <div className="top">
//             {" "}
//             <div class="circle">
//               <img src={Cat} alt={Cat} className="img"></img>
//             </div>
//           </div>
//           <div className="bottom">
//             <h3>Chào mừng bạn</h3>
//             <p>Hoang tat dang ky nhe</p>
//           </div>
//         </div>
//         <div style={{ ...style }}>
//           <div className="top">
//             {" "}
//             <div class="circle">
//               <img src={Cat} alt={Cat} className="img"></img>
//             </div>
//           </div>
//           <div className="bottom">
//             <h3>Chào mừng bạn</h3>
//             <p>Hoang tat dang ky nhe</p>
//           </div>
//         </div>
//       </Slide>
//     </div>
//   );
// };
// export default Slideshow;
