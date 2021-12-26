import CommentItem from "./CommentItem";
import NewComment from "./NewComment";
const CommentList = (props) => {
  const { dataComment } = props;
  return (
    <div>
      <NewComment></NewComment>
      {dataComment.map((item) => {
        return (
          <div key={item.id}>
            <CommentItem
              created_date={item.created_date}
              user={item.user}
              content={item.content}
            ></CommentItem>
          </div>
        );
      })}
      ;
    </div>
  );
};
export default CommentList;
