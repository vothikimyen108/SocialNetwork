import React, { useState, useEffect } from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {

  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//call api
import ProvincesApi from "../../../api/ProvincesApi";
//css
import FormStyles from "./FormStyles";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";

import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";

const AddressForm = (props) => {
  const classes = FormStyles();
  const { values, handleChange } = props;
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

  //test
  const [provinces, setProvinces] = useState([]);
  const [wards, setWards] = useState([]);
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        //gọi từ axios
        const response = await ProvincesApi.getAll();
        const provincesData = [];
        for (let i = 0; i < response.length; i++) {
          provincesData.push({
            name: response[i].name,
            code: response[i].code,
          });
        }
        setProvinces((prevImages) => prevImages.concat(provincesData));
        setWards([]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProvinces();
  }, [values.province]);
  //lấy quận theo tỉnh
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        //gọi từ axios
        const response1 = await ProvincesApi.getDistricts(values.province);
        const districtsData = [];
        for (let i = 0; i < response1.districts.length; i++) {
          districtsData.push({
            name: response1.districts[i].name,
            code: response1.districts[i].code,
          });
        }
        setDistricts(districtsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProvinces();
  }, [values.province]);
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await ProvincesApi.getwards(values.district);
        const wardsData = [];
        for (let i = 0; i < response.wards.length; i++) {
          wardsData.push({
            name: response.wards[i].name,
            code: response.wards[i].code,
          });
        }
        setWards(wardsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProvinces();
  }, [values.district]);
  const handleSubmit = () => {
    // e.preventDefault();
    console.log("ok");
    // e.target.reset();
  };
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.box}>
        <nav>
          {" "}
          <p className={classes.labelId}>Tỉnh/Thành:</p>
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
            value={values.province ? values.province : ""}
            select={values.province ? values.province : ""}
            onChange={handleChange("province")}
            validators={["required"]}
            errorMessages={["không để trống dòng này"]}
          >
            {provinces.map((item, id) => (
              <MenuItem value={item.code} key={id}>
                {item.name}
              </MenuItem>
            ))}
          </SelectValidator>
        </nav>
      </Grid>
      <Grid item className={classes.box}>
        <nav>
          {" "}
          <p className={classes.labelId}>Quận/huyện:</p>{" "}
        </nav>
        <nav>
          <SelectValidator
            className={classes.textField}
            // labelId="inputLabel"
            variant="outlined"
            size="small"
            SelectProps={{
              IconComponent: iconComponent,
              MenuProps: menuProps,
            }}
            value={values.district ? values.district : ""}
            select={values.district ? values.district : ""}
            onChange={handleChange("district")}
            validators={["required"]}
            errorMessages={["không để trống dòng này"]}
          >
            {districts.map((item, id) => (
              <MenuItem value={item.code} key={id}>
                {item.name}
              </MenuItem>
            ))}
          </SelectValidator>
        </nav>
      </Grid>
      <Grid item xs={12} className={classes.box}>
        <nav>
          {" "}
          <p className={classes.labelId}>Xã/phường:</p>{" "}
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
            value={values.ward ? values.ward : ""}
            onChange={handleChange("ward")}
            validators={["required"]}
            errorMessages={["không để trống dòng này"]}
            select={values.ward ? values.ward : ""}
            margin="normal"
          >
            {wards.map((item, id) => (
              <MenuItem value={item.name} key={id}>
                {item.name}
              </MenuItem>
            ))}
          </SelectValidator>
        </nav>
      </Grid>
      <Grid item xs={12} className={classes.box}>
        <nav>
          {" "}
          <p className={classes.labelId}>Đại chỉ:</p>{" "}
        </nav>
        <nav>
          <TextValidator
            className={classes.textField}
            variant="outlined"
            margin="normal"
            id="email"
            autoFocus
            size="small"
            value={values.address ? values.address : ""}
            onChange={handleChange("address")}
            validators={["required"]}
            errorMessages={["không để trống dòng này"]}
          ></TextValidator>
        </nav>
      </Grid>
      {/* <button>tiếp tục</button> */}
    </Grid>
    //</ValidatorForm>
  );
};

export default AddressForm;
