import { addBlog } from "@/actions/blog/blogActions";
import { allCategory } from "@/actions/category/categoryActions";

const AddBlog = async () => {
  //get all category
  const categories = await allCategory();
  return (
    <div>
      <div className="bg-gray-100 rounded py-3 text-center">
        <h1 className="text-xl font-medium">Add Blog</h1>
      </div>
      <div className="w-full flex justify-center my-5">
        <div className="w-full max-w-[650px] bg-gray-100 rounded shadow-md p-2 py-5">
          <form action={addBlog} enctype="multipart/form-data">
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
                />
              </div>
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Blog Description</label>
                </div>
                <input
                  type="text"
                  name="description"
                  placeholder="Your Blog Description Here..."
                  className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
                />
              </div>
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Select A Category</label>
                </div>
                <select
                  name="category"
                  className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
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
                  className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="border border-[#00AAA1] bg-[#00AAA1] hover:text-white hover:bg-sky-500 duration-150 ease-linear text-gray-200 py-2 px-5 w-full rounded "
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
