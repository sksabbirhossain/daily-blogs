import { addBlog } from "@/actions/blog/blogActions";
import { allCategory } from "@/actions/category/categoryActions";
import TextEditor from "@/components/admin/Blogs/TextEditor";
import { Suspense } from "react";

const AddBlog = async () => {
  //get all category
  const categories = await allCategory();
  return (
    <div>
      <div className="rounded bg-gray-100 py-3 text-center">
        <h1 className="text-xl font-medium">Add Blog</h1>
      </div>
      <div className="my-5 flex w-full justify-center">
        <div className="w-full max-w-[650px] rounded bg-gray-100 p-2 py-5 shadow-md">
          <form action={addBlog}>
            <div className="space-y-3">
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Blog Title</label>
                </div>
                <input
                  type="text"
                  name="title"
                  placeholder="Your Blog Title Here..."
                  className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
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
                  className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
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
                  className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                  rows={3}
                  required
                ></textarea>
              </div>

              <div className="space-y-1">
                <div>
                  <label htmlFor="">Blog Details</label>
                </div>
                <Suspense fallback="Loading Editor...">
                  <TextEditor />
                </Suspense>
              </div>

              <div className="space-y-1">
                <div>
                  <label htmlFor="">Select A Category</label>
                </div>
                <select
                  name="category"
                  className="w-full rounded border border-[#00AAA1] bg-gray-50 bg-white px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                  required
                >
                  <option value="">Select Category</option>
                  {categories?.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <div>
                  <label htmlFor="">Category Picture</label>
                </div>
                <input
                  type="file"
                  name="picture"
                  placeholder="Your Category Picture Here..."
                  className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1] dark:bg-white"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded border border-[#00AAA1] bg-[#00AAA1] px-5 py-2 text-gray-200 duration-150 ease-linear hover:bg-sky-500 hover:text-white "
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
