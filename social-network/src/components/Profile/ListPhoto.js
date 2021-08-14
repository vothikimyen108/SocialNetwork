import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CallMade from "@material-ui/icons/CallMade";
import LaunchIcon from "@material-ui/icons/Launch";

import { Row, Column, Item } from "@mui-treasury/components/flex";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: "0.2rem",
    backgroundColor: "rgba(0,0,0,0.72)",
    color: "#fff",
  },
})(Tooltip);

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: "#495869",
  },
  overline: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#8D9CAD",
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: "#495869",
  },
  submit: {
    background: "#F6F4F4",
    borderRadius: 25,
    border: 0,
    color: "#000",
    height: 30,
    padding: 20,
    width: "100%",
    boxShadow: "none",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
  label: {
    textTransform: "capitalize",
  },
}));

const BasicProfile = (props) => {
  const styles = useBasicProfileStyles();
  return (
    <Row {...props} style={{ display: "block" }}>
      <Item>
        <Button
          variant="contained"
          classes={{
            root: styles.submit, // class name, e.g. `classes-nesting-root-x`
            label: styles.label, // class name, e.g. `classes-nesting-label-x`
          }}
          startIcon={<LaunchIcon />}
        >
          xem tất cả
        </Button>
      </Item>
    </Row>
  );
};

const useCardHeaderStyles = makeStyles(() => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: "1.25rem",
    color: "#122740",
  },
  subheader: {
    fontSize: "0.875rem",
    color: "#495869",
  },
}));

const CardHeader = (props) => {
  const styles = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={"middle"}>
        <Typography className={styles.title}>
          <b>Ảnh</b>
        </Typography>
      </Item>
      <Item position={"right"} mr={-0.5}>
        <StyledTooltip title={"See details"}>
          <IconButton classes={iconBtnStyles}>
            <CallMade />
          </IconButton>
        </StyledTooltip>
      </Item>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    border: "2px solid",
    borderColor: "#E7EDF3",
    borderRadius: 16,
    transition: "0.4s",
    background: "#fff",
    "&:hover": {
      borderColor: "#5B9FED",
    },
  },

  root: {},
}));

export const ListPhoto = React.memo(function ShowcaseCard() {
  const styles = useStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 };
  return (
    <Grid container spacing={4} justify={"center"}>
      <Grid item xs={12} sm={4} md={3}>
        <Column
          className={styles.card}
          p={{ xs: 0.5, sm: 0.75, lg: 1 }}
          gap={gap}
        >
          <CardHeader />
          <Item>
            <Box minHeight={200} bgcolor={"#F4F7FA"} borderRadius={8} />
          </Item>
          <BasicProfile />
        </Column>
      </Grid>
    </Grid>
  );
});
export default ListPhoto;
