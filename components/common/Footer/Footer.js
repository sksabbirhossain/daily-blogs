import { allCategory } from "@/actions/category/categoryActions";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "../SocialIcon/SocialIcon";

const Footer = async () => {
  const categories = await allCategory();
  return (
    <section>
      <footer className="bg-[#e9f8f5] px-2 py-5 sm:px-0 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4">
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
                <h2 className="text-xl font-medium text-[#222]">Blogs</h2>
                <div className="space-y-2 text-sm text-[#555]">
                  {categories?.slice(0, 4)?.map((category) => (
                    <p
                      className="duration-150 ease-out hover:text-[#00AAA1]"
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
                <h2 className="text-xl font-medium capitalize text-[#222]">
                  quick links
                </h2>
                <div className="space-y-2 text-sm text-[#555]">
                  <p className="duration-150 ease-out hover:text-[#00AAA1]">
                    <Link href={"/asked-question"}>FAQ</Link>
                  </p>
                  <p className="duration-150 ease-out hover:text-[#00AAA1]">
                    <Link href={"/contact-us"}>Terms & conditions</Link>
                  </p>
                  <p className="duration-150 ease-out hover:text-[#00AAA1]">
                    <Link href={"/contact-us"}>support</Link>
                  </p>
                  <p className="duration-150 ease-out hover:text-[#00AAA1]">
                    <Link href={"/contact-us"}>privacy policy</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl font-medium capitalize text-[#222]">
                  Subscribe for newsletter
                </h2>
                <div className="space-y-4">
                  <form>
                    <div className="border-primary flex items-center rounded-md  border border-[#00AAA1]">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full rounded-l-md bg-transparent p-1 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="rounded-r-md border border-[#00AAA1] bg-[#00AAA1] px-3 py-1 text-white"
                      >
                        Subcribe
                      </button>
                    </div>
                  </form>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-[#222]">
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
      <div className="flex h-[50px] w-full items-center justify-center border-t border-gray-300 bg-[#cbf1f1] text-sm text-[#222]">
        <p>Copyright © 2023 . All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
