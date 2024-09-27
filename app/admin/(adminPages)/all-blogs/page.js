import { featuredBlog, getAllBlogs } from "@/actions/blog/blogActions";
import Image from "next/image";
import Link from "next/link";
import DeleteBlogButton from "./DeleteBlogButton";

const AllBlogs = async () => {
  const { blogs } = await getAllBlogs();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded bg-gray-100 px-2 py-3 shadow">
        <h1 className="text-xl font-bold uppercase">All Blogs</h1>
        <Link href="/admin/add-blog">
          <button className="rounded bg-green-600 px-2 py-1 text-white">
            Add Blog
          </button>
        </Link>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
            <thead className="bg-gray-200 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Picture
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Meta Description
                </th>
                <th scope="col" className="px-6 py-3">
                  featured
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs?.map((blog) => (
                <tr
                  className="border-b odd:bg-white even:bg-gray-50"
                  key={blog._id}
                >
                  <th scope="row" className="px-6 py-4">
                    <Image
                      src={blog?.picture}
                      alt="name"
                      width={100}
                      height={100}
                      className="h-[50px] w-[60px] rounded-md object-cover"
                    />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 "
                  >
                    {blog?.title?.substr(0, 50)}
                  </th>
                  <td className="px-6 py-4">
                    {blog?.description?.substr(0, 50)}
                  </td>

                  <td className="px-6 py-4">
                    <form action={featuredBlog}>
                      <input type="hidden" name="blogId" value={blog?._id} />
                      <input
                        type="hidden"
                        name="featured"
                        value={blog?.featured}
                      />
                      <button>
                        {blog?.featured === true ? (
                          <span className="whitespace-nowrap rounded bg-green-600 px-1 py-1 text-sm capitalize text-white">
                            Featured on
                          </span>
                        ) : (
                          <span className="whitespace-nowrap rounded bg-yellow-600 px-1 py-1 text-sm capitalize text-white">
                            Featured off
                          </span>
                        )}
                      </button>
                    </form>
                  </td>

                  <td className="px-6 py-4">{blog?.category?.name}</td>
                  <td className="flex gap-3 px-6 py-4">
                    <Link
                      href={`/admin/edit-blog/${blog?.slug}`}
                      className="font-medium text-green-700  hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                      </svg>
                    </Link>
                    <DeleteBlogButton id={blog?._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
