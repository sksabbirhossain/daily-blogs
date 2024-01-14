import { allCategory } from "@/actions/category/categoryActions";
import Link from "next/link";

export const metadata = {
  title: "Categories - Daily Blogs",
};

const Categories = async () => {
  //get all categories
  const categories = await allCategory();
  return (
    <section className="mb-10 bg-[#F2F8F7]">
      <div className="container mx-auto py-5 sm:py-14">
        <h1 className="text-center text-2xl capitalize sm:pb-4 ">categories</h1>
        <div className="flex w-full items-center justify-center py-5">
          <div className="w-full max-w-[900px]">
            <div className="flex w-full flex-wrap justify-center gap-4">
              {/* 1 */}
              {categories?.map((category) => (
                <Link href={`/categories/${category.slug}`} key={category._id}>
                  <div className="group flex h-28 w-52 cursor-pointer flex-col items-center justify-center space-y-2 rounded-md bg-[#E8F3F3] duration-150 ease-linear hover:bg-[#00AAA1] hover:text-white">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8 text-[#00AAA1] group-hover:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>
                    </span>
                    <h1 className="text-sm font-medium capitalize text-[#222] group-hover:text-white">
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
