import { searchBlogs } from "@/actions/blog/blogActions";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import RecentPostCard from "@/components/users/Home/RecentlyPosted/RecentPostCard";
import SearchPagination from "@/components/users/search/SearchPagination";

export async function generateMetadata({ searchParams }) {
  const { q } = searchParams;
  const searchQuery = decodeURIComponent(q);
  return {
    title: `${searchQuery} - Search | Daily Blogs`,
  };
}

const Search = async ({ searchParams }) => {
  const { q, page } = searchParams;

  if (!q) {
    throw new Error("searchQuery can't be empty!");
  }

  const searchQuery = decodeURIComponent(q);

  const { blogs, totalPages, currentPage } = await searchBlogs(
    parseInt(page),
    searchQuery
  );

  return (
    <section className="container mx-auto py-10">
      <div className="grid gap-5 md:gap-16 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 px-2 sm:px-0">
        <div className="md:col-span-2">
          <div className="space-y-5 sm:space-y-10">
            {/* heading */}
            <div className="border-b border-[#00AAA1] pb-1">
              <h4 className="text-[#555] text-base capitalize">
                search result for{" "}
                <span className="text-[#00AAA1] font-semibold">
                  {searchQuery}
                </span>
              </h4>
            </div>
            {/* post card */}
            <div className="space-y-5">
              {blogs?.map((blog) => (
                <RecentPostCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* pagination */}
            <div>
              <SearchPagination
                totalPage={totalPages}
                currentPage={currentPage}
                searchQuery={q}
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 pt-5 sm:pt-0">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Search;
