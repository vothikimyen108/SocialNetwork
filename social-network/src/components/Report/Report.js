import React from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import ClearIcon from "@material-ui/icons/Clear";
import { useState } from "react";
import CustomizedSnackbars from "../UI/CustomizedSnackbars";
import reportApi from "../../api/reportApi";
//css
import ReportStyle from "./ReportStyle";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import {
  SelectValidator,
  ValidatorForm,
} from "react-material-ui-form-validator";
const Report = (props) => {
  const { object_report, report_id } = props;
  const minimalSelectClasses = useMinimalSelectStyles();
  const classes = ReportStyle();
  //khai báo form ban đầu rỗng
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const alert = {
    nameAlert: ["warning", "success"],
    message: ["Lỗi server", "Cảm ơn bạn đã báo cáo chúng tối sẽ xem xét"],
  };
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
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
  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + " " + minimalSelectClasses.icon}
      />
    );
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    //code
    const fetchAddAuction = async () => {
      try {
        //gửi data
        const response = await reportApi.addReport({
          object_report: object_report,
          report_id: report_id,
          type_report_id: status,
        });
        //thông báo
        setIsSuccess("success");
        setOpen(true);
        return response;
      } catch (error) {
        setIsSuccess("error");
        setOpen(true);
      }
    };
    fetchAddAuction();
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const renderAlert = () => {
    if (isSuccess === "success") {
      return (
        <CustomizedSnackbars
          open={open}
          handleClose={handleClose}
          nameAlert={alert.nameAlert[1]}
          message={alert.message[1]}
        ></CustomizedSnackbars>
      );
    }
    if (isSuccess === "warning") {
      return (
        <CustomizedSnackbars
          open={open}
          handleClose={handleClose}
          nameAlert={alert.nameAlert[0]}
          message={alert.message[0]}
        ></CustomizedSnackbars>
      );
    }
  };
  return (
    <>
      <ValidatorForm instantValidate onSubmit={handleOnSubmit}>
        <div className={classes.select}>
          <h3>Xác nhận báo cáo vui lòng chọn lý do</h3>
          <SelectValidator
            className={classes.textField1}
            variant="outlined"
            SelectProps={{
              IconComponent: iconComponent,
              MenuProps: menuProps,
            }}
            size="small"
            onChange={handleChange}
            value={status ? status : ""}
            select={status ? status : ""}
            validators={["required"]}
            errorMessages={[`yêu cầu chọn`]}
          >
            <MenuItem value={1}>
              {" "}
              người dùng đấu giá nhưng không thanh toán
            </MenuItem>
            <MenuItem value={2}>người dùng dùng từ ngữ không đúng đắn</MenuItem>
          </SelectValidator>
        </div>
        <div className={classes.box2}>
          <Button
            variant="contained"
            onClick={props.onDelete}
            classes={{
              root: classes.submit, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            startIcon={<ClearIcon />}
          >
            thoát
          </Button>
          <Button
            variant="contained"
            type="submit"
            classes={{
              root: classes.submit, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            startIcon={<SendIcon />}
          >
            gửi yêu cầu
          </Button>
        </div>
      </ValidatorForm>
      {renderAlert()}
    </>
  );
};

export default Report;
