"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [commonError, setCommonError] = useState("");

  const router = useRouter();

  // console.log("commonError")
  // console.log(commonError)

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setCommonError("");
      setError("");
      const res = await fetch(`http://localhost:5000/api/user/register`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });
      const result = await res.json();
      if (result.status === 200) {
        router.push("/login");
        toast.success("Successfully register. please login your account");
      } else {
        setError(result?.errors);
      }
    } catch (err) {
      setCommonError(err.message);
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="max-w-[350px] -mt-[50px] bg-gray-100 p-3 rounded pb-7 shadow-sm shadow-[#00AAA1]/50">
        <h1 className="text-center capitalize text-xl font-medium py-5">
          Register your account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div className="space-y-2">
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Name
                </label>
              </div>
              <input
                className="w-full border border-[#00AAA1] focus:outline-[#00AAA1] rounded px-1 py-2"
                type="text"
                name="name"
                placeholder="your name here..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error?.name && (
                <p className="text-red-500 text-[13px] font-semibold">
                  {error?.name?.msg}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Email
                </label>
              </div>
              <input
                className="w-full border border-[#00AAA1] focus:outline-[#00AAA1] rounded px-1 py-2"
                type="email"
                name="email"
                placeholder="your email here..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error?.email && (
                <p className="text-red-500 text-[13px] font-semibold">
                  {error?.email?.msg}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <input
                className="w-full border border-[#00AAA1] focus:outline-[#00AAA1] rounded px-1 py-2"
                type="password"
                name="password"
                placeholder="your password here..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error?.password && (
                <p className="text-red-500 text-[13px] font-semibold">
                  {error?.password?.msg}
                </p>
              )}
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="hover:bg-[#00AAA1] border border-[#00AAA1] rounded py-2 w-full font-medium hover:text-white bg-white duration-150 ease-in"
              >
                Register
              </button>
            </div>
            <div className="pt-2">
              <p className="text-center text-xs font-medium text-[#00AAA1] capitalize">
                <Link href="/login">Login your account</Link>
              </p>
            </div>
          </div>
        </form>
        {error?.common && (
          <p className="text-center py-2 bg-red-400 text-white rounded mt-2">
            {error?.common?.msg}
          </p>
        )}
        {commonError !== "" && (
          <p className="text-center py-2 bg-red-400 text-white rounded mt-2">
            {commonError}
          </p>
        )}
      </div>
    </div>
  );
};

export default RegisterComponent;
