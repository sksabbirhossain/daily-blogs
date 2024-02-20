import { addCategory } from "@/actions/category/categoryActions";
import Button from "@/components/common/Button/Button";
import { redirect } from "next/navigation";

const AddCategory = () => {
  //handle add category
  const handleSubmit = async (formdata) => {
    "use server";
    await addCategory(formdata);
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
                  className="w-full rounded border border-[#00AAA1] bg-transparent px-1 py-2 focus:border-2 focus:outline-none"
                  required
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
                  className="w-full rounded border border-[#00AAA1] bg-transparent px-1 py-2 focus:border-2 focus:outline-none"
                />
              </div>
              <div>
                <Button>Add Category</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
