import React, { useState } from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import { KeyboardDatePicker } from "@material-ui/pickers";

//css
import FormStyles from "./FormStyles";
const PhoneNumber = (props) => {
  const classes = FormStyles();
  //khai báo
  const { values, handleChange } = props;

  const selectedDate = new Date();
  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + " " + minimalSelectClasses.icon}
      />
    );
  };

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
      color: "#000",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };
  return (
    <ValidatorForm
      className={classes.form}
      //ref="form"
      // onSubmit={handleSubmit}
      onError={(errors) => console.log(errors)}
    >
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} className={classes.box}>
          <nav>
            {" "}
            <p className={classes.labelId}>Giới tính:</p>{" "}
          </nav>
          <nav>
            <Select
              disableUnderline
              className={classes.input}
              labelId="inputLabel"
              IconComponent={iconComponent}
              MenuProps={menuProps}
              onChange={handleChange("gender")}
              value={values.gender ? values.gender : " "}
            >
              <MenuItem value={"Nam"}>Nam</MenuItem>
              <MenuItem value={"Nữ"}>Nữ</MenuItem>
            </Select>
          </nav>
        </Grid>
        <Grid item xs={12} className={classes.box}>
          <nav>
            {" "}
            <p className={classes.labelId}>Ngày sinh:</p>{" "}
          </nav>
          <nav>
            <KeyboardDatePicker
              autoOk
              variant="inline"
              className={classes.textFieldDate}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              value={values.birthday ? values.birthday : selectedDate}
              size="small"
              style={{ width: "231px" }}
              InputAdornmentProps={{ position: "start" }}
              onChange={handleChange("birthday")}
            />
          </nav>
        </Grid>
        <Grid item xs={12} className={classes.box}>
          <nav>
            {" "}
            <p className={classes.labelId}>Điện thoại:</p>{" "}
          </nav>
          <nav>
            <TextValidator
              className={classes.textField}
              variant="outlined"
              margin="normal"
              size="small"
              onChange={handleChange("phone")}
              value={values.phone ? values.phone : " "}
              validators={["required"]}
              errorMessages={["không để trống dòng này"]}
            ></TextValidator>
          </nav>
        </Grid>
      </Grid>
    </ValidatorForm>
  );
};

export default PhoneNumber;
