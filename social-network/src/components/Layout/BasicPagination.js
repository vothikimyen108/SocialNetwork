import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination(props) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    props.onPageChange(value);
    console.log(page);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        onChange={handleChange}
        count={props.count}
        color="primary"
        size="large"
      />
    </div>
  );
}
