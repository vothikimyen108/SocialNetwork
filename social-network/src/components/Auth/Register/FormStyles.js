import { makeStyles } from "@material-ui/core/styles";
const FormStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  input: {
    color: "#616161",
    "& .MuiSelect-selectMenu": {
      color: "#6a1b9a",
      minWidth: "210px",
      padding: 9.5,
      background: "white",
      border: "1px solid #c5cae9",
      borderRadius: 30,
    },
  },
  labelId: {
    fontWeight: "bold",
    fontSize: 15,
    display: "inline",
    margin: 0,
    float: "left",
  },
  box: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    "& nav": {
      //width: "20%",
    },
    "& nav:first-child": {
      width: 100,
      marginRight: 15,
      //   border: "13px solid #000",
    },
  },
  textField: {
    padding: 0,
    margin: 0,
    float: "left",
    [`& fieldset`]: {
      borderRadius: 25,
      border: "1px solid #c5cae9",
      minWidth: "230px",
    },
    "& .MuiOutlinedInput-inputMarginDense": {
      margin: 0,
      marginLeft: 0,
    },
  },
  textFieldDate: {
    padding: 0,
    margin: 0,
    float: "left",
    marginLeft: 4,
    [`& .MuiOutlinedInput-root`]: {
      borderRadius: 25,
      border: "none",
      [`& fieldset`]: {
        border: "1px solid #c5cae9",
      },
    },
  },
}));
export default FormStyles;
