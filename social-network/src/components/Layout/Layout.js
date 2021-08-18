import { Fragment } from "react";


import Grid from "@material-ui/core/Grid";
import MainNavigation from "./MainNavigation";
import SecondNavigation from "./SecondNavigation";
import LayoutMenber from "./LayoutMenber";
import LayoutListMember from "./LayoutListMember";
const dataMember = [
  {
    id: 1,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
  {
    id: 2,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
  {
    id: 3,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
  {
    id: 4,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
  {
    id: 5,
    name: "Lê Phước",
    createJoin: "12 ngày trước",
  },
];
const Layout = (props) => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={12}>
          <MainNavigation></MainNavigation>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <SecondNavigation mt={10}></SecondNavigation>
          <LayoutMenber></LayoutMenber>
        </Grid>
        {/* <Grid item xs={12} sm={12} lg={3}>
          <HeaderProfile></HeaderProfile>
          <ListPhoto></ListPhoto>
        </Grid> */}
        <Grid item xs={12} sm={12} md={8}>
          {props.children}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Layout;
