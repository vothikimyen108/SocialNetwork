import React, { useState, useEffect } from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
//call api
import ProvincesApi from "../../../api/ProvincesApi";
//css
import FormStyles from "./FormStyles";
const AddressForm = () => {
  const [valProvinces, setvalProvinces] = useState(1);
  const classes = FormStyles();
  const handleChange = (event) => {
    setvalProvinces(event.target.value);
    setValWards(null);
  };

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
        console.log(response);
        const response1 = await ProvincesApi.getDistricts(valProvinces);
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
  }, []);
  //lấy quận theo tỉnh
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        //gọi từ axios
        const response1 = await ProvincesApi.getDistricts(valProvinces);
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
  }, [valProvinces]);
  //code xa huyện
  const [valdistricts, setValdistricts] = useState(null);
  const handleChangeDistricts = (event) => {
    setValdistricts(event.target.value);
    console.log("Ok" + valdistricts);
  };
  const handleChangewards = (event) => {
    setValWards(event.target.value);
    console.log("Ok" + valdistricts);
  };
  const [wards, setWards] = useState([]);
  const [valwards, setValWards] = useState(null);
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        //gọi từ axios
        if (valdistricts !== null) {
          const response = await ProvincesApi.getwards(valdistricts);
          const wardsData = [];
          for (let i = 0; i < response.wards.length; i++) {
            wardsData.push({
              name: response.wards[i].name,
              code: response.wards[i].code,
            });
          }
          setWards(wardsData);
          console.log(response.wards);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProvinces();
  }, [valdistricts]);

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
            {" "}
            <p className={classes.labelId}>Tỉnh/Thành:</p>
          </nav>
          <nav>
            <Select
              disableUnderline
              className={classes.input}
              labelId="inputLabel"
              IconComponent={iconComponent}
              MenuProps={menuProps}
              value={valProvinces || ""}
              onChange={handleChange}
            >
              {provinces.map((item, id) => (
                <MenuItem value={item.code} key={id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </nav>
        </Grid>
        <Grid item className={classes.box}>
          <nav>
            {" "}
            <p className={classes.labelId}>Quận/huyện:</p>{" "}
          </nav>
          <nav>
            <Select
              disableUnderline
              className={classes.input}
              labelId="inputLabel"
              IconComponent={iconComponent}
              MenuProps={menuProps}
              value={valdistricts || ""}
              onChange={handleChangeDistricts}
            >
              {districts.map((item, id) => (
                <MenuItem value={item.code} key={id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </nav>
        </Grid>
        <Grid item xs={12} className={classes.box}>
          <nav>
            {" "}
            <p className={classes.labelId}>Quận/huyện:</p>{" "}
          </nav>
          <nav>
            <Select
              disableUnderline
              className={classes.input}
              labelId="inputLabel"
              IconComponent={iconComponent}
              MenuProps={menuProps}
              value={valwards || ""}
              onChange={handleChangewards}
            >
              {wards.map((item, id) => (
                <MenuItem value={item.code} key={id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
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
              // fullWidth
              id="email"
              // name="email"
              // autoComplete="email"
              // autoFocus
              size="small"
              // onChange={handleChange}
              // value={info.formData.email}
              validators={["required", "isEmail"]}
              errorMessages={[
                "không để trống dòng này",
                "vui lòng nhập đúng email",
              ]}
            ></TextValidator>
          </nav>
        </Grid>
      </Grid>
    </ValidatorForm>
  );
};

export default AddressForm;
