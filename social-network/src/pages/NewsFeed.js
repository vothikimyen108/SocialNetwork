import NewsList from "../components/News/NewsList";
import CreateNews from "../components/News/CreateNews";
//data
// key={item.id}
// avatar={item.avatar}
// name={item.name}
// content={item.content}
// totalLike={item.totalLike}
// totalShare={item.totalShare}
// totalComment={item.totalComment}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 110,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const data = [
  {
    id: 1,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 2,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 3,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 4,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
  {
    id: 5,
    avatar: "Y",
    name: "Võ yến",
    content: "Nay tui nấu chè đấu giá",
    totalLike: 30,
    totalShare: 20,
    totalComment: 10,
  },
];
const NewsFeed = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CreateNews></CreateNews>
        </Grid>
        <Grid item xs={12}>
          <NewsList data={data}></NewsList>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewsFeed;
