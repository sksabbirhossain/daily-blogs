import { getBlogsByCategory } from "@/actions/blog/blogActions";
import { allCategory } from "@/actions/category/categoryActions";
import Pagination from "@/components/common/Pagination/Pagination";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import RecentPostCard from "@/components/users/Home/RecentlyPosted/RecentPostCard";

//generate Meta data
export async function generateMetadata({ params: { slug } }) {
  const blogs = await getBlogsByCategory(slug);
  return {
    title: `${blogs[0]?.category?.name} - Daily Blogs`,
  };
}

const Category = async ({ params: { slug }, searchParams }) => {
  const { page } = searchParams;

  //get blogs by slug
  const { blogs, totalPages, currentPage } = await getBlogsByCategory(
    slug,
    parseInt(page),
  );

  return (
    <section className="container mx-auto py-5 sm:py-10">
      <div className="md:gird-cols-2 grid grid-cols-1 gap-5 px-2 sm:px-0 md:gap-16 lg:grid-cols-3">
        <div className="md:col-span-2">
          <div className="space-y-5 sm:space-y-10">
            {/* heading */}
            <div className="border-b border-[#00AAA1] pb-1">
              <h4 className="text-base capitalize text-[#555]">
                search result for{" "}
                <span className="font-semibold text-[#00AAA1]">
                  {blogs[0]?.category?.name}
                </span>
              </h4>
            </div>
            {/* blog card */}
            <div className="space-y-5">
              {blogs?.map((blog) => (
                <RecentPostCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* pagination */}
            <Pagination totalPage={totalPages} currentPage={currentPage} />
          </div>
        </div>
        <div className="pt-5 sm:pt-0 md:col-span-1">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

//generate all Categories
export async function generateStaticParams() {
  const categories = await allCategory();
  return categories.map((category) => ({ slug: category.slug }));
}

export default Category;
