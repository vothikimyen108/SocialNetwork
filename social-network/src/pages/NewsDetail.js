import { Fragment, useEffect } from "react";
import {
  useParams,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import NewsItem from "../components/News/NewsItem";

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

const NewsDetail = () => {
  //lấy giá trị tham số của url
  const params = useParams();
  let history = useHistory();
  const handlerIsOpenPhoto = () => {
    history.push("/");
  };
  return (
    <Fragment>
      <NewsItem
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        content={item.content}
        totalLike={item.totalLike}
        totalShare={item.totalShare}
        totalComment={item.totalComment}
        isExpanded={true}
        isShowImg={true}
        isPageDetail={true}
        open={handlerIsOpenPhoto}
      ></NewsItem>
    </Fragment>
  );
};

export default NewsDetail;
