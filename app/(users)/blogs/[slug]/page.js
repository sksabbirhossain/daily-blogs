import {
  getAllBlogs,
  getBlog,
  getRelatedBlogs,
} from "@/actions/blog/blogActions";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import RelatedBlogs from "@/components/users/Blog/RelatedBlogs";
import ShereIcons from "@/components/users/Blog/ShereIcons";
import moment from "moment";
import Image from "next/image";
import { Suspense } from "react";

import CommentSection from "@/components/users/Blog/Comment/CommentSection";
import defaultPic from "@/public/default.jpg";
import { notFound, redirect } from "next/navigation";

//generate Meta data
export async function generateMetadata({ params: { slug } }) {
  const blog = await getBlog(slug);
  return {
    title: blog?.metaTitle,
    description: blog?.description,
    openGraph: {
      images: [
        {
          url: blog?.picture,
        },
      ],
    },
  };
}

const Blog = async ({ params: { slug }, searchParams }) => {
  //get a blog
  const blogPromise = getBlog(slug);
  // get related blogs
  const relatedBlogsPromise = getRelatedBlogs(slug);

  const blog = await blogPromise;

  if (blog?.status === 404) {
    redirect("/");
  }

  const { _id, title, category, details, picture, updatedAt, createdBy } =
    blog || {};

  return (
    <section className="container mx-auto py-10">
      <div className="md:gird-cols-2 grid grid-cols-1 gap-5 px-2 sm:px-0 md:gap-7 lg:grid-cols-3">
        <div className="md:col-span-2">
          <div className="w-full space-y-5 sm:space-y-8">
            {/* heading */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#00AAA1]">
                {category?.name}
              </p>
              <h1 className="text-2xl font-semibold capitalize text-[#222] dark:text-gray-200">
                {title}
              </h1>
              <p className="flex flex-wrap items-center gap-1 space-x-3 text-xs text-[#777] dark:text-gray-300">
                <span className="flex items-center">
                  <span className="h-5 w-5 rounded-full ring-1">
                    <Image
                      src={defaultPic}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt="user"
                    />
                  </span>
                  <span className="ml-1 capitalize">{createdBy?.name}</span>
                </span>
                <span className="flex items-center">
                  <span className="pr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                  </span>
                  {moment(updatedAt).format("DD MMMM YYYY")}
                </span>
              </p>
            </div>
            {/* image */}
            <div className="relative h-[430px] w-full">
              <Image
                src={picture}
                fill
                alt={title}
                className=" rounded-md object-cover"
              />
            </div>
            {/* full details */}
            <div
              className="blogDetails text-[#222] dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: details }}
            />
            {/* shere icons */}
            <div className="flex w-full items-center justify-center pb-5 sm:pb-0">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-[60px] bg-[#D1E7E5] sm:w-[100px] lg:w-[200px] dark:bg-slate-500" />
                <ShereIcons />
                <div className="h-[1px] w-[60px] bg-[#D1E7E5] sm:w-[100px] lg:w-[200px] dark:bg-slate-500" />
              </div>
            </div>
            {/* google adds */}
            {/* <div className="h-44 w-full rounded-md bg-[#00AAA1]"></div> */}

            {/* all comments for this blog */}
            <CommentSection
              slug={slug}
              blogId={_id}
              searchParams={searchParams}
            />

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
        <div className="pt-5 sm:pt-0 md:col-span-1">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

//generate all blogs
export async function generateStaticParams() {
  const { blogs } = await getAllBlogs();
  return blogs?.map((blog) => ({ slug: blog.slug }));
}

export default Blog;
