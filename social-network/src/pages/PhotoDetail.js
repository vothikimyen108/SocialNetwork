import { Fragment, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import NewsItem from "../components/News/NewsItem";
import Photo from "../components/Photos/Photo";
import useHttp from "../hook/useHttp";
import newsApi from "../api/newsApi";
import { CircularProgress } from "@material-ui/core";
const item = {
  id: 1,
  avatar: "Y",
  name: "Võ yến",
  content:
    "Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up. Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.Use this monospace tool to generate fixed-width text that can be copied into Facebook, Twitter, SMS, etc. Monospace fonts can mimic a typewriter or computer terminal. They are useful useful when displaying tabular data (like in a spreadsheet) and you want the columns to line up.",
  totalLike: 30,
  totalShare: 20,
  totalComment: 10,
};

const PhotoDetail = (props) => {
  const history = useHistory();
  const { photoId } = useParams();
  //quay lai trag tuoc do
  const handerCloseIsopenPhoto = () => {
    history.goBack();
  };

  const {
    sendRequest,
    status,
    data: item,
    error,
  } = useHttp(newsApi.getPost, true);

  useEffect(() => {
    sendRequest(photoId);
  }, []);

  if (status === "pending") {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <p style={{ marginTop: 300, textAlign: "center" }}>404</p>;
  }

  if (!item) {
    return <p style={{ marginTop: 300, textAlign: "center" }}>{item.id}</p>;
  }

  return <Photo item={item} onClose={handerCloseIsopenPhoto}></Photo>;
};

export default PhotoDetail;
