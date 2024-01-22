import {
  getCategory,
  updateCategory,
} from "@/actions/category/categoryActions";
import { redirect } from "next/navigation";

const EditCategory = async ({ params: { slug } }) => {
  const category = await getCategory(slug);

  //handle update category form
  const handleSubmit = async (formData) => {
    "use server";
    await updateCategory(slug, formData);
    redirect("/admin/categories");
  };

  return (
    <div>
      <div className="rounded bg-gray-100 py-3 text-center">
        <h1 className="text-xl font-medium">Add Category</h1>
      </div>
      <div className="my-5 flex w-full justify-center">
        <div className="w-full max-w-[350px] rounded bg-gray-100 p-2 py-5 shadow-md">
          <form action={handleSubmit}>
            <div className="space-y-3">
              <div className="space-y-1">
                <div>
                  <label htmlFor="">Category Name</label>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Category Name Here..."
                  className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                  defaultValue={category[0]?.name}
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
                  className="w-full rounded border border-[#00AAA1] bg-gray-50 px-1 py-2 focus:outline-1 focus:outline-[#00AAA1]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded border border-[#00AAA1] bg-[#00AAA1] px-5 py-2 text-gray-200 duration-150 ease-linear hover:bg-sky-500 hover:text-white "
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

export default EditCategory;
