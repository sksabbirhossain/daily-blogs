import { allCategory } from "@/actions/category/categoryActions";
import Link from "next/link";

export const metadata = {
  title: "Categories - Daily Blogs",
};

const Categories = async () => {
  //get all categories
  const categories = await allCategory();
  return (
    <section className="bg-[#F2F8F7] mb-10">
      <div className="container mx-auto py-5 sm:py-14">
        <h1 className="text-2xl text-center capitalize sm:pb-4 ">categories</h1>
        <div className="w-full flex justify-center items-center py-5">
          <div className="w-full max-w-[900px]">
            <div className="w-full flex gap-4 flex-wrap justify-center">
              {/* 1 */}
              {categories?.map((category) => (
                <Link href={`/categories/${category.slug}`} key={category._id}>
                  <div className="flex flex-col items-center justify-center bg-[#E8F3F3] hover:bg-[#00AAA1] hover:text-white rounded-md w-52 h-28 space-y-2 group duration-150 ease-linear cursor-pointer">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-[#00AAA1] group-hover:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>
                    </span>
                    <h1 className="text-[#222] text-sm font-medium capitalize group-hover:text-white">
                      {category.name}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
