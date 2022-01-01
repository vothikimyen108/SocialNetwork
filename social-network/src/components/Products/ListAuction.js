import { DataGrid } from "@mui/x-data-grid";
import React, { useRef, useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import auctionApi from "../../api/auctionApi";
import Grid from "@material-ui/core/Grid";
import AutionStyles from "./AutionStyles";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import AlertNoti from "../UI/AlertNoti";
import CustomizedSnackbars from "../UI/CustomizedSnackbars";
import { useSelector } from "react-redux";

export default function ListAuction(props) {
  const { data, id, user } = props;
  const classes = AutionStyles();
  //open
  const [open, setOpen] = useState(false);
  //cờ xem hiện thông báo
  const [isSuccess, setIsSuccess] = useState("");
  const [userWin, setUserWin] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  const [openNewsForm, setNewsForm] = useState(false);
  // thông báo
  const alert = {
    nameAlert: ["error", "success"],
    message: ["xảy ra lỗi", "Đặt đấu thầu thành công"],
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //hàm hiện thông báo
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
  const columns = [
    {
      field: "user_join",
      headerName: "Người tham gia",
      width: 130,
      editable: true,
      renderCell: (params) => {
        let staff = params.getValue(params.id, "user_join");
        return staff.first_name + " " + staff.last_name;
      },
    },
    {
      field: "money_auctioned",
      headerName: "Giá tiền",
      width: 100,
      editable: true,
    },
    {
      field: "user_win",
      headerName: "kết quả",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      renderCell: (params) => {
        let staff = params.getValue(params.id, "user_win");
        if (staff === false) {
          return <p>chưa thắng</p>;
        } else {
          return <p>thắng</p>;
        }
      },
    },
    {
      field: "detail",
      headerName: "chọn người chiến thắng",
      sortable: false,
      width: 180,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        let id = params.getValue(params.id, "user_join");
        return (
          <>
            <IconButton
              onClick={() => {
                hanlerView(id.id);
              }}
              color="primary"
              aria-label="upload picture"
              component="span"
              classes={
                {
                  //label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }
              }
            >
              <EditIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  //view
  function hanlerView(params) {
    setUserWin(params);
    setNewsForm(true);
  }

  //kiem tra
  const handerSubmit = (event) => {
    //để k chuyển trang
    event.preventDefault();
    //code
    const fetchAddAuction = async () => {
      try {
        //gửi data
        const response = await auctionApi.addAuction({
          postid: id,
          userid: userWin,
        });
        handerClose();
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

  const handerClose = () => {
    setNewsForm(false);
  };
  //render
  const renderConfirm = () => {
    return (
      <form onSubmit={handerSubmit} className={classes.form}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.center}>
              <h3>Xác nhận đấu giá</h3>

              <IconButton className={classes.close} onClick={handerClose}>
                <CloseIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.center}>
              <p>Bạn có đồng ý cho này thắng trong trận đấu giá này không? </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              classes={{
                root: classes.button, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
              }}
            >
              Xác nhận
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  };

  return (
    <div style={{ height: 400, width: "100%", background: "#fff" }}>
      {currentUser.id === user.id && (
        <DataGrid
          rows={data}
          columns={columns}
          rowsPerPageOptions={[5]}
          checkboxSelection={false}
          disableSelectionOnClick
        />
      )}
      {renderAlert()}
      {openNewsForm && (
        <AlertNoti onClose={handerClose} open={true}>
          {renderConfirm()}
        </AlertNoti>
      )}{" "}
    </div>
  );
}
