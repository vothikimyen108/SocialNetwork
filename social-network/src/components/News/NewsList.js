//item
import NewsItem from "./NewsItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const NewsList = (props) => {
  //animated
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {props.data.map((item) => (
        <div data-aos="fade-right">
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
          ></NewsItem>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
