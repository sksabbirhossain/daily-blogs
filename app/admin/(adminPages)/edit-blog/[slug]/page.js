import { getBlog, updateBlog } from "@/actions/blog/blogActions";
import { allCategory } from "@/actions/category/categoryActions";
import TextEditor from "@/components/admin/Blogs/TextEditor";
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
      <h1 className="text-xl font-bold px-1 py-2 rounded-md shadow-md">
        Edit Blog
      </h1>
      {/* edit blog form */}
      <div className="w-full flex justify-center my-5">
        <div className="w-full max-w-[650px] bg-gray-100 rounded shadow-md p-2 py-5">
          <form action={handleSubmit}>
            <div className="space-y-3">
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Blog Title</label>
                </div>
                <input
                  type="text"
                  name="title"
                  placeholder="Your Blog Title Here..."
                  className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
                  defaultValue={blog?.title}
                  required
                />
              </div>
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Meta Title</label>
                </div>
                <input
                  type="text"
                  name="metaTitle"
                  placeholder="Your Blog Meta Title Here..."
                  className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
                  defaultValue={blog?.metaTitle}
                  required
                />
              </div>
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Meta Description</label>
                </div>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Your Blog Meta Description Here..."
                  className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
                  rows={3}
                  defaultValue={blog?.description}
                  required
                ></textarea>
              </div>
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Blog Details</label>
                </div>
                <Suspense fallback="Loading Editor...">
                  <TextEditor defaultValue={blog?.details} />
                </Suspense>
              </div>
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Select A Category</label>
                </div>
                <select
                  name="category"
                  className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
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
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Blog Picture</label>
                </div>
                <input
                  type="file"
                  name="picture"
                  placeholder="Your Category Picture Here..."
                  className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="border border-[#00AAA1] bg-[#00AAA1] hover:text-white hover:bg-sky-500 duration-150 ease-linear text-gray-50 py-2 px-5 w-full rounded "
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
