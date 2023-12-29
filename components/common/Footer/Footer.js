import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section>
      <footer className="bg-[#F2F8F7] py-5 md:py-10 px-2 sm:px-0">
        <div className="container mx-auto">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <div className="space-y-3">
                <h2>Daily Blogs</h2>
                <p className="text-base">
                  Did you come here for something in particular or just general
                  Riker
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl text-black font-medium">Blogs</h2>
                <div className="space-y-2">
                  <p className="hover:text-primary duration-150 ease-out">
                    <Link href={"/"}>Travel</Link>
                  </p>
                  <p className="hover:text-primary duration-150 ease-out">
                    <Link href={"/"}>Technology</Link>
                  </p>
                  <p className="hover:text-primary duration-150 ease-out">
                    <Link href={"/"}>Lifestyle</Link>
                  </p>
                  <p className="hover:text-primary duration-150 ease-out">
                    <Link href={"/"}>fashion</Link>
                  </p>
                  <p className="hover:text-primary duration-150 ease-out">
                    <Link href={"/"}>Business</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl text-black font-medium">quick links</h2>
                <div className="space-y-2">
                  <p className="hover:text-primary duration-150 ease-out">
                    <Link href={"/"}>FAQ</Link>
                  </p>
                  <p className="hover:text-primary duration-150 ease-out">
                    <Link href={"/"}>Terms & conditions</Link>
                  </p>
                  <p className="hover:text-primary duration-150 ease-out">
                    <Link href={"/"}>support</Link>
                  </p>
                  <p className="hover:text-primary duration-150 ease-out">
                    <Link href={"/"}>privacy policy</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl text-black font-medium">
                  Subscribe for newsletter
                </h2>
                <div className="space-y-2">
                  <form>
                    <div className="flex items-center border rounded-md border-primary">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full rounded-l-md p-1 focus:outline-none bg-transparent"
                      />
                      <button
                        type="submit"
                        className="bg-primary rounded-r-md py-1 px-3 text-white"
                      >
                        Subcribe
                      </button>
                    </div>
                  </form>
                  <div className="">
                    <h2 className="text-md">follow on:</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex w-full h-[50px] items-center justify-center bg-[#ecf8f6] text-gray-700 border-t border-gray-300 text-sm">
        <p>Copyright © 2023 . All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
