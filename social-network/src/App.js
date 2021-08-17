import Grid from "@material-ui/core/Grid";
import MainNavigation from "./components/Layout/MainNavigation";
import NewsFeed from "./pages/NewsFeed";
import SecondNavigation from "./components/Layout/SecondNavigation";
import LayoutMenber from "./components/Layout/LayoutMenber";
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
      <Grid item xs={12} sm={12} md={6}>
        <NewsFeed></NewsFeed>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <LayoutListMember data={dataMember}></LayoutListMember>
      </Grid>

      <Grid item xs={12} md={12}>
        <MainNavigation></MainNavigation>
      </Grid>
    </Grid>
  );
}
export default App;
