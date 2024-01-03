import BlogCard from "./BlogCard";

const RelatedBlogs = async ({ relatedBlogsPromise, blogId }) => {
  const relatedBlogs = await relatedBlogsPromise;
  return (
    <div className="space-y-5">
      <h2 className="text-[#222] text-xl font-semibold">
        <span className="bg-[#00AAA1] px-2 rounded-sm text-[#fff] me-2">
          See related
        </span>
        Blogs
      </h2>
      {/* related Blogs card */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
        {relatedBlogs
          ?.filter((blog) => blog._id !== blogId)
          ?.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
