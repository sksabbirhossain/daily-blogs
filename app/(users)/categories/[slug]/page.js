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

const Category = async ({ params: { slug } }) => {
  //get blogs by slug
  const blogs = await getBlogsByCategory(slug);
  return (
    <section className="container mx-auto py-5 sm:py-10">
      <div className="grid gap-5 md:gap-16 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 px-2 sm:px-0">
        <div className="md:col-span-2">
          <div className="space-y-5 sm:space-y-10">
            {/* heading */}
            <div className="border-b border-[#00AAA1] pb-1">
              <h4 className="text-[#555] text-base capitalize">
                search result for{" "}
                <span className="text-[#00AAA1] font-semibold">
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
            <Pagination />
          </div>
        </div>
        <div className="md:col-span-1 pt-5 sm:pt-0">
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
