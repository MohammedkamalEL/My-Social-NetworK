import img from "../assets/Logo.png";
export default function Comments({ comment }) {
//   console.log(comment);
//   console.log("src is:", comment.author.profile_image );

  return (
    <div>
      <div className="rounded-md p-3  mt-3 border ">
        <div className="flex gap-3 items-center">
          <img
            src={comment?.author?.profile_image || img}
            alt="img"
            className="object-cover w-8 h-8 rounded-full border-2 border-emerald-400   shadow-emerald-400"
          />
          <h3 className="font-bold border-">{comment?.author?.name ?? "name"}</h3>
        </div>
        <p className="text-white  mt-2">{comment?.body ?? "body"}</p>
      </div>
    </div>
  );
}
