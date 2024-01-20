import { addCategory } from "@/actions/category/categoryActions";

const AddCategory = () => {
  return (
    <div>
      <div className="bg-gray-100 rounded py-3 text-center">
        <h1 className="text-xl font-medium">Add Category</h1>
      </div>
      <div className="w-full flex justify-center my-5">
        <div className="w-full max-w-[350px] bg-gray-100 rounded shadow-md p-2 py-5">
          <form action={addCategory}>
            <div className="space-y-3">
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Category Name</label>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Category Name Here..."
                  className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
                />
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

export default AddCategory;
