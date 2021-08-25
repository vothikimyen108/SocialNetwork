import React, { useState, useEffect } from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  labelId: {
    fontWeight: "bold",
    fontSize: 15,
    display: "inline",
    margin: 0,
    marginRight: 30,
    width: "20%",
  },
  box: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& nav": {
      width: 210,
      marginBottom: 10,
      "&:firstChlid": {
        marginTop: "none",
      },
    },
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 25,
    },
  },
}));
const PhoneNumber = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <ValidatorForm
      className={classes.form}
      //ref="form"
      // onSubmit={handleSubmit}
      onError={(errors) => console.log(errors)}
    >
      <Grid container spacing={2} className={classes.root}>
        <Grid item className={classes.box}>
          <nav>
            <TextValidator
              className={classes.textField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="số điện thoại *"
              name="email"
              autoComplete="email"
              autoFocus
              // onChange={handleChange}
              // value={info.formData.email}
              validators={["required", "isEmail"]}
              errorMessages={[
                "không để trống dòng này",
                "vui lòng nhập đúng email",
              ]}
            ></TextValidator>
          </nav>
          <nav>
            <KeyboardDatePicker
              autoOk
              variant="inline"
              className={classes.textField}
              inputVariant="outlined"
              label="Ngày sinh"
              format="MM/dd/yyyy"
              value={selectedDate}
              InputAdornmentProps={{ position: "start" }}
              onChange={(date) => handleDateChange(date)}
            />
          </nav>
          <nav>
            <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              //   open={open}
              //   onClose={handleClose}
              //   onOpen={handleOpen}
              //   value={age}
              //   onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </nav>
        </Grid>
      </Grid>
    </ValidatorForm>
  );
};

export default PhoneNumber;
