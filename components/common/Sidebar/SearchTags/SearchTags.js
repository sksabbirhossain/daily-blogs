import { allCategory } from "@/actions/category/categoryActions";
import Link from "next/link";

const SearchTags = async () => {
  //get all category
  const categories = await allCategory();
  return (
    <div className="space-y-5">
      <h2 className="text-xl text-[#222] font-semibold">
        <span className="text-[#00AAA1] pr-2 uppercase">search</span>
        With Categories
      </h2>
      <div className="flex flex-wrap gap-3">
        {categories?.slice(0, 9).map((category) => (
          <Link key={category._id} href={`/categories/${category.slug}`}>
            <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
              {category.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchTags;
