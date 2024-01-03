import { allCategory } from "@/actions/category/categoryActions";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "../SocialIcon/SocialIcon";

const Footer = async () => {
  const categories = await allCategory();
  return (
    <section>
      <footer className="bg-[#e9f8f5] py-5 md:py-16 px-2 sm:px-0">
        <div className="container mx-auto">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <div className="space-y-3">
                <div>
                  <Image src="/logo.png" width={200} height={50} alt="logo" />
                </div>
                <p className="text-sm text-[#555]">
                  Explore a world of daily wonders with Daily Blogs. Immerse
                  yourself in a diverse range of articles, from insightful
                  reflections to practical tips.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl text-[#222] font-medium">Blogs</h2>
                <div className="space-y-2 text-[#555] text-sm">
                  {categories?.slice(0, 4)?.map((category) => (
                    <p
                      className="hover:text-[#00AAA1] duration-150 ease-out"
                      key={category._id}
                    >
                      <Link href={`/categories/${category.slug}`}>
                        {category.name}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl text-[#222] font-medium capitalize">
                  quick links
                </h2>
                <div className="space-y-2 text-[#555] text-sm">
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/asked-question"}>FAQ</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/contact-us"}>Terms & conditions</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/contact-us"}>support</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/contact-us"}>privacy policy</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl text-[#222] font-medium capitalize">
                  Subscribe for newsletter
                </h2>
                <div className="space-y-4">
                  <form>
                    <div className="flex items-center border border-[#00AAA1]  rounded-md border-primary">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full rounded-l-md p-1 focus:outline-none bg-transparent"
                      />
                      <button
                        type="submit"
                        className="bg-[#00AAA1] border border-[#00AAA1] rounded-r-md py-1 px-3 text-white"
                      >
                        Subcribe
                      </button>
                    </div>
                  </form>
                  <div className="space-y-2">
                    <h2 className="text-base text-[#222] font-semibold">
                      follow on:
                    </h2>
                    <SocialIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex w-full h-[50px] items-center justify-center bg-[#cbf1f1] text-[#222] border-t border-gray-300 text-sm">
        <p>Copyright © 2023 . All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
