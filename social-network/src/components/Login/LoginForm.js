import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import FacebookIcon from "@material-ui/icons/Facebook";
import { ReactComponent as Logo } from "../../assets/Login/logo.svg";
import { ReactComponent as GG } from "../../assets/Login/google.svg";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(8, 4),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(8, 4),
    },
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(8, 12),
    },
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(3, 0, 2, 0),
  },
  avatar: {
    padding: theme.spacing(1),
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    height: "100%",
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
  signup: {
    background: "#fff",
    borderRadius: 25,
    border: 0,
    color: "#4a00e0",
    height: 48,
    width: "100%",
    padding: "0 30px",
  },
  logo: {},

  label: {
    textTransform: "capitalize",
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 25,
    },
  },
}));

const LoginForm = function LoginForm() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Typography fontWeight="fontWeightBold" component="h1">
        {" "}
        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
          Đăng Nhập
        </Box>
      </Typography>
      <form className={classes.form} noValidate>
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
          Đăng nhập
        </Button>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Grid item className={classes.avatar}>
            <Link href="#" variant="body2">
              Quên mật khẩu?
            </Link>
          </Grid>
          <Grid item className={classes.avatar}>
            <Link href="#" variant="body2">
              Chưa có tài khoản?
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
export default LoginForm;
