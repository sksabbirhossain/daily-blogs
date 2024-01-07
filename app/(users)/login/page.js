import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex w-full h-screen -mt-[50px] justify-center items-center">
      <div className="bg-gray-100 p-3 rounded py-10 shadow-sm shadow-[#00AAA1]/50">
        <form action="">
          <div className="space-y-3">
            <div className="space-y-2">
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Email
                </label>
              </div>
              <input
                className="border border-[#00AAA1] focus:outline-[#00AAA1] rounded px-1 py-2"
                type="email"
                name="email"
                placeholder="your email here..."
              />
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <input
                className="border border-[#00AAA1] focus:outline-[#00AAA1] rounded px-1 py-2"
                type="password"
                name="password"
                placeholder="your password here..."
              />
            </div>
            <div className="pt-2">
              <button className="hover:bg-[#00AAA1] border border-[#00AAA1] rounded py-2 w-full font-medium hover:text-white bg-white duration-150 ease-in">
                Login
              </button>
            </div>
            <div className="pt-2 text-center font-bold">
              <span> - </span>OR<span> - </span>
            </div>
            <div className="pt-2">
              <button className="hover:bg-[#00AAA1] border border-[#00AAA1] rounded py-2 w-full font-medium hover:text-white bg-white duration-150 ease-in">
                Google
              </button>
            </div>
            <div className="pt-2">
              <p className="text-center text-xs font-medium text-[#00AAA1]">
                <Link href="/register">Create your account</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
