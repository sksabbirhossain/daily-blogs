import { getFeaturedBlogs } from "@/actions/blog/blogActions";
import Card from "./Card";
import PopulerPostCard from "./PopulerPostCard";

const HeroSection = async () => {
  //get featured blogs
  const featuredBlogs = await getFeaturedBlogs();
  return (
    <section className="w-full bg-[#e9f8f5] dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="md:gird-cols-2 grid grid-cols-1 gap-5 py-10 sm:gap-10 lg:grid-cols-3">
          {/* left side */}
          <div className="md:col-span-2">
            <div className="pb-5">
              <h2 className="text-xl font-medium text-[#222] dark:text-white">
                <span className="rounded bg-[#00AAA1] px-2 text-white">
                  Featured
                </span>{" "}
                This month
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2">
              {featuredBlogs?.map((blog) => (
                <Card key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="">
            <div className="pb-5">
              <h2 className="text-xl font-medium text-[#222] dark:text-gray-100">
                <span className="rounded bg-[#00AAA1] px-2 text-white">
                  populer
                </span>{" "}
                Posted
              </h2>
            </div>
            <div className="space-y-7">
              {featuredBlogs?.map((blog) => (
                <PopulerPostCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
