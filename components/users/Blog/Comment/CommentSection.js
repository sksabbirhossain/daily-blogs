import { getComments } from "@/actions/comments/commentActions";
import Pagination from "@/components/common/Pagination/Pagination";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentSection = async ({ slug, blogId, searchParams }) => {
  const { page = 1 } = searchParams || {};
  let currentPage = page;
  if (currentPage) {
    currentPage = parseInt(currentPage);
  }
  const { comments, totalComments, totalPages } =
    (await getComments(blogId, currentPage)) || {};

  return (
    <div className="w-full space-y-5">
      <div className="border-b pb-1">
        <h2 className="text-lg font-semibold">
          Coments <span>({totalComments})</span>
        </h2>
      </div>
      {/* comment form */}
      <CommentForm slug={slug} blogId={blogId} />

      {/* all comments */}
      <div className="space-y-5">
        {comments?.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
        {comments?.length <= 0 && (
          <div className="text-center text-sm capitalize">
            <p>please write your comment !!</p>
          </div>
        )}
        <div>
          {totalComments > 0 && (
            <Pagination currentPage={currentPage} totalPage={totalPages} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
