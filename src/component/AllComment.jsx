import Comments from "./Comments";

export default function AllComment({ comments }) {
  // console.log(comments);

  function ShowAllComments() {
    return comments.map((comment) => <Comments key={comment.id} comment={comment} />);
  }

  return (
    <article className="w-full  ">
      <h3 className="font-bold">Discussion</h3>
      <div className="flex flex-col">
        <ShowAllComments />
      </div>
    </article>
  );
}
