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
    <div className="flex h-screen w-full items-center justify-center">
      <div className="-mt-[50px] max-w-[350px] rounded bg-gray-100 p-3 pb-7 shadow-sm shadow-[#00AAA1]/50">
        <h1 className="py-5 text-center text-xl font-medium capitalize">
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
                className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-[#00AAA1]"
                type="text"
                name="name"
                placeholder="your name here..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error?.name && (
                <p className="text-[13px] font-semibold text-red-500">
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
                className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-[#00AAA1]"
                type="email"
                name="email"
                placeholder="your email here..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error?.email && (
                <p className="text-[13px] font-semibold text-red-500">
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
                className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-[#00AAA1]"
                type="password"
                name="password"
                placeholder="your password here..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error?.password && (
                <p className="text-[13px] font-semibold text-red-500">
                  {error?.password?.msg}
                </p>
              )}
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded border border-[#00AAA1] bg-white py-2 font-medium duration-150 ease-in hover:bg-[#00AAA1] hover:text-white"
              >
                Register
              </button>
            </div>
            <div className="pt-2">
              <p className="text-center text-xs font-medium capitalize text-[#00AAA1]">
                <Link href="/login">Login your account</Link>
              </p>
            </div>
          </div>
        </form>
        {error?.common && (
          <p className="mt-2 rounded bg-red-400 py-2 text-center text-white">
            {error?.common?.msg}
          </p>
        )}
        {commonError !== "" && (
          <p className="mt-2 rounded bg-red-400 py-2 text-center text-white">
            {commonError}
          </p>
        )}
      </div>
    </div>
  );
};

export default RegisterComponent;
