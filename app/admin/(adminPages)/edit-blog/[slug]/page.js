import { getAllBlogs, getBlog, updateBlog } from "@/actions/blog/blogActions";
import { allCategory } from "@/actions/category/categoryActions";
import TextEditor from "@/components/admin/Blogs/TextEditor";
import Button from "@/components/common/Button/Button";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const EditBlog = async ({ params: { slug } }) => {
  //get all category
  const categories = await allCategory();
  //get blog by slug
  const blog = await getBlog(slug);

  //handle update blog form
  const handleSubmit = async (formData) => {
    "use server";
    await updateBlog(slug, formData);
    redirect("/admin/all-blogs");
  };

  return (
    <div className="space-y-6 pb-10">
      <h1 className="rounded-md px-1 py-2 text-xl font-bold shadow-md">
        Edit Blog
      </h1>
      {/* edit blog form */}
      <div className="my-5 flex w-full justify-center">
        <div className="w-full rounded bg-gray-100 p-2 py-5 shadow-md">
          <form action={handleSubmit}>
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-3">
                  {/* title */}
                  <div className="space-y-1">
                    <div>
                      <label htmlFor="">Blog Title</label>
                    </div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Your Blog Title Here..."
                      className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                      defaultValue={blog?.title}
                      required
                    />
                  </div>

                  {/* meta title */}
                  <div className="space-y-1">
                    <div>
                      <label htmlFor="">Meta Title</label>
                    </div>
                    <input
                      type="text"
                      name="metaTitle"
                      placeholder="Your Blog Meta Title Here..."
                      className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                      defaultValue={blog?.metaTitle}
                      required
                    />
                  </div>

                  {/* meta description */}
                  <div className="space-y-1">
                    <div>
                      <label htmlFor="">Meta Description</label>
                    </div>
                    <textarea
                      type="text"
                      name="description"
                      placeholder="Your Blog Meta Description Here..."
                      className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                      rows={5}
                      defaultValue={blog?.description}
                      required
                    ></textarea>
                  </div>

                  {/* category */}
                  <div className="space-y-1">
                    <div>
                      <label htmlFor="">Select A Category</label>
                    </div>
                    <select
                      name="category"
                      className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                      required
                    >
                      <option value={blog?.category?._id}>
                        {blog?.category?.name}
                      </option>
                      {categories?.map((category) => (
                        <option value={category._id} key={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* blog picture */}
                  <div className="space-y-1">
                    <div>
                      <label htmlFor="">Blog Picture</label>
                    </div>
                    <input
                      type="file"
                      name="picture"
                      placeholder="Your Category Picture Here..."
                      className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {/* blog details */}
                  <div className="space-y-1">
                    <div>
                      <label htmlFor="">Blog Details</label>
                    </div>
                    <Suspense fallback="Loading Editor...">
                      <TextEditor defaultValue={blog?.details} />
                    </Suspense>
                  </div>

                  {/* button */}
                  <div>
                    <Button>Update</Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

//generate all blogs
export async function generateStaticParams() {
  const { blogs } = await getAllBlogs();
  return blogs?.map((blog) => ({ slug: blog.slug }));
}

export default EditBlog;
