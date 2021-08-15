//item
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  return (
    <div>
      {props.data.map((item) => (
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
      ))}
    </div>
  );
};

export default NewsList;
