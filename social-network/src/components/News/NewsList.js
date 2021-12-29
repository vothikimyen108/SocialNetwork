//item
import NewsItem from "./NewsItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NewsListStyles from "./NewsListStyles";
import moment from "moment";
import newsApi from "../../api/newsApi";
const NewsList = (props) => {
  //css
  const classes = NewsListStyles();
  //animated
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {props.data.map((item) => (
        <div data-aos="fade-right" className={classes.root} key={item.id}>
          <NewsItem
            isGo={true}
            id={item.id}
            className={classes.border}
            avatar={item.avatar}
            name={item.user.first_name + item.user.last_name}
            content={item.content}
            totalLike={item.total_like}
            totalShare={item.totalShare}
            totalComment={item.total_comment}
            isExpanded={true}
            isShowImg={true}
            tags={item.tags}
            date={moment(item.created_date).startOf("minute").fromNow()}
            open={props.open}
            image={item.image}
            product={item.product}
            like={item.like}
            comment={item.comment}
            end_date={item.end_date}
            isPageDetail={false}
          ></NewsItem>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
