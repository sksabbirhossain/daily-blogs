import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";

const Footer = () => {
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
                  Did you come here for something in particular or just general
                  Riker
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl text-[#222] font-medium">Blogs</h2>
                <div className="space-y-2 text-[#555] text-sm">
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/"}>Travel</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/"}>Technology</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/"}>Lifestyle</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/"}>fashion</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/"}>Business</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl text-[#222] font-medium">quick links</h2>
                <div className="space-y-2 text-[#555] text-sm">
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/"}>FAQ</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/"}>Terms & conditions</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/"}>support</Link>
                  </p>
                  <p className="hover:text-[#00AAA1] duration-150 ease-out">
                    <Link href={"/"}>privacy policy</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <h2 className="text-xl text-[#222] font-medium">
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
                    <SocialIcon/>
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