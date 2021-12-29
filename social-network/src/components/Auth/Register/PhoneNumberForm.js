import React from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import ValidatedDatePicker from "./ValidatedDatePicker";
import {
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
//css
import FormStyles from "./FormStyles";
const PhoneNumber = (props) => {
  const classes = FormStyles();
  //khai báo
  const { values, handleChange } = props;

  const minimalSelectClasses = useMinimalSelectStyles();
  const selectedDate = new Date();
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
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} className={classes.box}>
        <nav>
          {" "}
          <p className={classes.labelId}>Giới tính:</p>{" "}
        </nav>
        <nav>
          <SelectValidator
            className={classes.textField}
            variant="outlined"
            size="small"
            SelectProps={{
              IconComponent: iconComponent,
              MenuProps: menuProps,
            }}
            onChange={handleChange("gender")}
            value={values.gender ? values.gender : ""}
            select={values.gender ? values.gender : ""}
            validators={["required"]}
            errorMessages={["không để trống dòng này"]}
          >
            <MenuItem value={"True"}>Nam</MenuItem>
            <MenuItem value={"False"}>Nữ</MenuItem>
          </SelectValidator>
        </nav>
      </Grid>
      <Grid item xs={12} className={classes.box}>
        <nav>
          {" "}
          <p className={classes.labelId}>Ngày sinh:</p>{" "}
        </nav>
        <nav>
          <ValidatedDatePicker
            autoOk
            variant="inline"
            className={classes.textFieldDate}
            inputVariant="outlined"
            format="MM/dd/yyyy"
            value={values.birthday ? values.birthday : selectedDate}
            size="small"
            validators={["required"]}
            errorMessages={["không để trống dòng này"]}
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
            type="number"
            onChange={handleChange("phone")}
            value={values.phone ? values.phone : ""}
            validators={["required", "minStringLength:10"]}
            errorMessages={[
              "không để trống dòng này",
              "vui lòng nhập đúng số điện thoại",
            ]}
          ></TextValidator>
        </nav>
      </Grid>
    </Grid>
  );
};

export default PhoneNumber;
