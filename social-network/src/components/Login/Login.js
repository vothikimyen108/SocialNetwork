// import ware from "../../assets/Login/wave.png";
// import logo from "../../assets/Login/bg.svg";
// import { Typography, Link, Grid, CssBaseline } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import LoginForm from "./LoginForm";

// import StarfieldAnimation from "react-starfield-animation";
// import Wave from "react-wavify";
// //lấy này hiện tại
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Bản quyền thuộc về © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Nhân Tâm
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//   },
//   wave: {
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundImage: `url(${ware})`,
//   },
//   img: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100%",
//   },
//   undraw: {
//     width: "60%",
//   },
// }));

// const Login = function Login() {
//   const classes = useStyles();

//   return (
//     <div className="wave">
//       <StarfieldAnimation
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//         }}
//       />
//       <Wave style={{ zIndex: 10 }} options={{ speed: 0.5 }} fill="#257" />
//       <Wave style={{ zIndex: 10 }} options={{ speed: 0.5 }} fill="#257" />
//     </div>
//   );
// };
// export default Login;
import React from "react";
import { Typography, Container, Link, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarfieldAnimation from "react-starfield-animation";
import Wave from "react-wavify";
import LoginForm from "./LoginForm";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },

  wave: {
    height: "28%",
    position: "absolute",
    bottom: "0",
    width: "50%",
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Wave
        style={{ zIndex: 4 }}
        options={{ speed: 0.5 }}
        fill="#388E3C"
        className={classes.wave}
      />
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        <LoginForm></LoginForm>
      </Box>
    </div>
  );
}
