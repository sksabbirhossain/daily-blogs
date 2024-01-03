import { getBlog, getRelatedBlogs } from "@/actions/blog/blogActions";
import RelatedBlogs from "@/components/common/Blogs/RelatedBlogs";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import ShereIcons from "@/components/users/Blog/ShereIcons";
import moment from "moment";
import Image from "next/image";
import { Suspense } from "react";

const Blog = async ({ params: { slug } }) => {
  //get a blog
  const blogPromise = getBlog(slug);
  // get related blogs
  const relatedBlogsPromise = getRelatedBlogs(slug);

  const blog = await blogPromise;

  const { _id, title, category, description, picture, createdAt } = blog || {};
  return (
    <section className="container mx-auto py-10">
      <div className="grid gap-5 md:gap-7 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 px-2 sm:px-0">
        <div className="md:col-span-2">
          <div className="space-y-5 sm:space-y-8">
            {/* heading */}
            <div className="space-y-2">
              <p className="text-xs text-[#00AAA1] font-semibold">
                {category?.name}
              </p>
              <h1 className="text-[#222] font-semibold text-2xl capitalize">
                {title}
              </h1>
              <p className="flex flex-wrap gap-1 space-x-3 items-center text-xs text-[#777]">
                <span className="flex items-center">
                  <span className="w-5 h-5">
                    <Image
                      src="/blog.jpg"
                      width={30}
                      height={30}
                      className="rounded-full w-full h-full"
                      alt="user"
                    />
                  </span>
                  <span className="ml-1">Admin</span>
                </span>
                <span className="flex items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                  </span>
                  {moment(createdAt).format("DD MMMM YYYY")}
                </span>
              </p>
            </div>
            {/* image */}
            <div>
              <Image
                src={picture}
                width={1000}
                height={1000}
                alt="title"
                className="w-full h-full max-h-[430px] object-cover rounded-md"
              />
            </div>
            {/* descriptions */}
            <div className="">
              <p className="text-[#666] text-sm font-normal">{description}</p>
            </div>
            {/* shere icons */}
            <div className="w-full flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="h-[1px] bg-[#D1E7E5] w-[60px] sm:w-[100px] lg:w-[200px]" />
                <ShereIcons />
                <div className="h-[1px] bg-[#D1E7E5] w-[60px] sm:w-[100px] lg:w-[200px]" />
              </div>
            </div>
            {/* google adds */}
            <div className="w-full h-44 bg-[#00AAA1] rounded-md"></div>
            {/* related Blogs */}
            <Suspense fallback="<h1>Related Blogs is Loading...</h1>">
              <RelatedBlogs
                relatedBlogsPromise={relatedBlogsPromise}
                blogId={_id}
              />
            </Suspense>
            {/* google adds */}
            {/* <div className="w-full h-44 bg-[#00AAA1] rounded-md"></div> */}
          </div>
        </div>
        <div className="md:col-span-1 pt-5 sm:pt-0">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Blog;
