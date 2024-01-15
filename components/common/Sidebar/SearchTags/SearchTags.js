import { allCategory } from "@/actions/category/categoryActions";
import Link from "next/link";

const SearchTags = async () => {
  //get all category
  const categories = await allCategory();
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-[#222] dark:text-gray-100">
        <span className="pr-2 uppercase text-[#00AAA1]">search</span>
        With Categories
      </h2>
      <div className="flex flex-wrap gap-3">
        {categories?.slice(0, 9).map((category) => (
          <Link key={category._id} href={`/categories/${category.slug}`}>
            <button className="rounded-md border px-3 py-1 text-xs text-[#222] hover:bg-[#00AAA1] hover:text-white dark:border-gray-700 dark:bg-slate-800 dark:text-gray-100">
              {category.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchTags;
