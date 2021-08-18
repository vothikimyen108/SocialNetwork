import Grid from "@material-ui/core/Grid";
import NewsFeed from "./pages/NewsFeed";
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LayoutListMember from "./components/Layout/LayoutListMember";
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
function App() {
  // ❌ If you have this, consider moving <ThemeProvider> to HOC and wrap the App
  return (
    <Layout>
      {" "}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/newsfeed" />
        </Route>
        <Route path="/newsfeed" exact>
          <Grid item xs={12} sm={12} md={9}>
            <NewsFeed></NewsFeed>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <LayoutListMember data={dataMember}></LayoutListMember>
          </Grid>
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
