import CommentItem from "./CommentItem";
import NewComment from "./NewComment";
const CommentList = (props) => {
  return (
    <div>
      <NewComment></NewComment>
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
    </div>
  );
};
export default CommentList;
