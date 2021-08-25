import React, { useState, useEffect } from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InputLabel from "@material-ui/core/InputLabel";
// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import { makeStyles } from "@material-ui/core/styles";
import ProvincesApi from "../../api/ProvincesApi";
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
      minWidth: "250px",
      padding: 10,
      background: "white",
      border: "1px solid #c5cae9",
      borderRadius: 30,
      //   marginTop: 20,
    },
    // padding-top: 14px;
    // border-color: #e0e0e0;
    // border-style: solid;
    // border-width: 2px;
    // padding-left: 24px;
    // border-radius: 4px;
    // padding-bottom: 15px;
  },
  labelId: {
    fontWeight: "bold",
    fontSize: 15,
    display: "inline",
    margin: 0,
    // float: "left",
    marginRight: 30,
    width: "20%",
    //marginTop: 9,
    // margin: 10,
  },
  box: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
}));
const MinimalSelect = () => {
  const [valProvinces, setvalProvinces] = useState(1);
  const classes = useStyles();
  const handleChange = (event) => {
    setvalProvinces(event.target.value);
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
  //lấy quận theo tỉnh
  const [districts, setDistricts] = useState([]);
  //code xa huyện
  const [valdistricts, setValdistricts] = useState(0);
  const handleChangeDistricts = (event) => {
    setValdistricts(event.target.value);
  };
  const [wards, setWards] = useState([]);
  //   useEffect(() => {
  //     const fetchProvinces = async () => {
  //       try {
  //         //gọi từ axios
  //         const response = await ProvincesApi.getAll();
  //         const provincesData = [];

  //         for (let i = 0; i < response.length; i++) {
  //           provincesData.push({
  //             name: response[i].name,
  //             code: response[i].code,
  //           });
  //         }
  //         setProvinces((prevImages) => prevImages.concat(provincesData));
  //         setWards([]);
  //         console.log(wards);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchProvinces();
  //   }, [valProvinces]);
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
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
        console.log(response.districts);
        //gọi từ axios
        const response2 = await ProvincesApi.getwards(valdistricts);
        const wardsData = [];
        for (let i = 0; i < response2.wards.length; i++) {
          wardsData.push({
            name: response2.wards[i].name,
            code: response2.wards[i].code,
          });
        }
        setWards(wardsData);
        console.log(response2.wards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProvinces();
    // const fetchProvinces1 = async () => {
    //   try {
    //     //gọi từ axios
    //     const response = await ProvincesApi.getwards(valdistricts);
    //     const wardsData = [];
    //     for (let i = 0; i < response.wards.length; i++) {
    //       wardsData.push({
    //         name: response.wards[i].name,
    //         code: response.wards[i].code,
    //       });
    //     }
    //     setWards(wardsData);
    //     console.log(response.wards);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchProvinces1();
    // const fetchProvinces2 = async () => {
    //   try {
    //gọi từ axios

    //     console.log(wards);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchProvinces();
  }, [valProvinces, valdistricts]);

  //   useEffect(() => {

  //   }, [valdistricts]);
  return (
    <Grid container spacing={2}>
      <Grid item className={classes.box}>
        <p className={classes.labelId}>Tỉnh/Thành:</p>
        <Select
          disableUnderline
          className={classes.input}
          labelId="inputLabel"
          IconComponent={iconComponent}
          MenuProps={menuProps}
          //   value={valProvinces}
          onChange={handleChange}
        >
          {provinces.map((item, id) => (
            <MenuItem value={item.code} key={id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item className={classes.box}>
        <p className={classes.labelId}>Quận/huyện:</p>
        <Select
          disableUnderline
          className={classes.input}
          labelId="inputLabel"
          IconComponent={iconComponent}
          MenuProps={menuProps}
          //   value={valdistricts}
          onChange={handleChangeDistricts}
        >
          {districts.map((item, id) => (
            <MenuItem value={item.code} key={id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} className={classes.box}>
        <p className={classes.labelId}>Phường xã:</p>
        <Select
          disableUnderline
          className={classes.input}
          labelId="inputLabel"
          IconComponent={iconComponent}
          MenuProps={menuProps}
          //   value={val}
          // onChange={handleChange}
        >
          {wards.map((item, id) => (
            <MenuItem value={item.code} key={id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};

export default MinimalSelect;
