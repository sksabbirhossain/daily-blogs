import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentSection = async ({ slug, blogId }) => {
  return (
    <div className="w-full space-y-5">
      <div className="border-b pb-1">
        <h2 className="text-lg font-semibold">
          Coments <span>(5)</span>
        </h2>
      </div>
      {/* comment form */}
      <CommentForm slug={slug} blogId={blogId} />

      {/* all comments */}
      <div className="space-y-5">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default CommentSection;
