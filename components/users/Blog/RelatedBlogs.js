import BlogCard from "./BlogCard";

const RelatedBlogs = async ({ relatedBlogsPromise, blogId }) => {
  const relatedBlogs = await relatedBlogsPromise;
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-[#222]">
        <span className="me-2 rounded-sm bg-[#00AAA1] px-2 text-[#fff]">
          See related
        </span>
        Blogs
      </h2>
      {/* related Blogs card */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
