import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Anh } from "../../assets/ImgHome/avatar.svg";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Autorenew } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  contentComment: {
    border: "1px solid #f0f2f5",
    borderRadius: "30px",
    padding: "10px",
    height: "auto",
    float: "left",
    width: "75%",
    marginTop: "10px",
    backgroundColor: "#f0f2f5",
  },
  authorComment: {
    fontWeight: "bold",
    "& span": {
      fontWeight: "normal",
      color: "grey",
    },
  },
  btEdit: {
    margin: "auto",
    float: "left",
    textAlign: "center",
    width: "5%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputCMT: {
    maxheight: "auto",
    width: "100%",
    padding: 0,
    [`& fieldset`]: {
      border: 0,
    },
    "& .MuiOutlinedInput-multiline": {
      padding: "5px 0px",
    },
  },
}));

export default function CommentItem() {
  const classes = useStyles();

  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar>
          <Anh></Anh>
        </Avatar>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.contentComment}>
          <Typography className={classes.authorComment}>
            Kim Yến <span>12h</span>
          </Typography>
          <TextField
            classes={{
              root: classes.inputCMT,
            }}
            multiline
            //   rows={Autorenew}
            defaultValue="Truncation should be conditionally applicable on this long line oftext as this is a much longer line than what the container can 
              
            "
            inputProps={{
              readOnly: true,
              style: { textAlign: "justify", textJustify: "inter-character" },
            }}
            variant="outlined"
          />
        </div>

        <div className={classes.btEdit}>
          <IconButton
            aria-label="show more"
            // aria-controls={mobileMenuId}
            aria-haspopup="true"
            // onClick={handleMenuHideOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
}
