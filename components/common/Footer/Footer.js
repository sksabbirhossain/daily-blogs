import { allCategory } from "@/actions/category/categoryActions";
import logo from "@/public/darkLogo.png";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "../SocialIcon/SocialIcon";

const Footer = async () => {
  const categories = await allCategory();
  return (
    <section>
      <footer className="bg-[#e9f8f5] px-2 py-5 sm:px-0 md:py-16 dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <div className="space-y-3">
                <div>
                  <Image src={logo} width={200} height={50} alt="logo" />
                </div>
                <p className="text-sm text-[#555] dark:text-gray-300">
                  Explore a world of daily wonders with fastrebo Blogs. Immerse
                  yourself in a diverse range of articles, from insightful
                  reflections to practical tips.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl font-medium text-[#222] dark:text-[#00AAA1]">
                  Blogs
                </h2>
                <div className="space-y-2 text-sm text-[#555]">
                  {categories?.slice(0, 4)?.map((category) => (
                    <p
                      className="text-[#444] duration-150 ease-out hover:text-[#00AAA1] dark:text-gray-300"
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
                <h2 className="text-xl font-medium capitalize text-[#222] dark:text-[#00AAA1]">
                  quick links
                </h2>
                <div className="space-y-2 text-sm text-[#555] dark:text-gray-300">
                  <p className="capitalize duration-150 ease-out hover:text-[#00AAA1]">
                    <Link href={"/asked-question"}>FAQ</Link>
                  </p>
                  <p className="capitalize duration-150 ease-out hover:text-[#00AAA1]">
                    <Link href={"/terms"}>Terms & conditions</Link>
                  </p>
                  <p className="capitalize duration-150 ease-out hover:text-[#00AAA1]">
                    <Link href={"/contact-us"}>support</Link>
                  </p>
                  <p className="capitalize duration-150 ease-out hover:text-[#00AAA1]">
                    <Link href={"/privacy-policy"}>privacy policy</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl font-medium capitalize text-[#222] dark:text-[#00AAA1]">
                  Subscribe for newsletter
                </h2>
                <div className="space-y-4">
                  <form>
                    <div className="border-primary flex items-center rounded-md  border border-[#1d9690]">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full rounded-l-md bg-transparent p-1 focus:outline-none dark:text-gray-100"
                      />
                      <button
                        type="submit"
                        className="rounded-r-md border border-[#1d9690] bg-[#1d9690] px-3 py-1 text-white"
                      >
                        Subcribe
                      </button>
                    </div>
                  </form>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-[#222] dark:text-white">
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
      <div className="flex h-[50px] w-full items-center justify-center border-t border-gray-300 bg-[#cbf1f1] text-sm text-[#222] dark:border-gray-700 dark:bg-slate-900 dark:text-gray-100">
        <p>
          Copyright © 2024{" "}
          <a href="https://fastrebo.com" target="_blank">
            <span className="text-[#00AAA1]">fastrebo</span>
          </a>
          . All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
