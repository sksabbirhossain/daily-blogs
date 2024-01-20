"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  //handle admin login
  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (admin.status === 200) {
      toast.success("Admin Login SuccessFull");
      router.push("/admin/dashboard");
    }

    if (admin.status === 401) {
      setError("Invalid credentials!");
    }
    if (admin.status !== 401 && admin.status !== 200) {
      setError("There was a server error!");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center px-2 sm:px-0">
      <div className="w-full max-w-[300px] space-y-5 rounded-md bg-gray-50 p-3 pb-10 pt-5 shadow-md">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/mobile-logo.png"
            width={200}
            height={200}
            alt="logo"
            className="h-10 w-10 object-cover"
          />
          <h1 className="text-xl font-semibold capitalize text-[#00AAA1] drop-shadow">
            Admin Login
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div className="space-y-1">
              <div>
                <label htmlFor="">Email</label>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email Here..."
                className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-1 focus:outline-[#00AAA1] dark:bg-gray-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <div>
                <label htmlFor="">Password</label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Your Password Here..."
                className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-1 focus:outline-[#00AAA1] dark:bg-gray-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-1 w-full rounded border border-[#00AAA1] bg-[#00AAA1] px-5 py-2 font-semibold text-white duration-150 ease-linear hover:bg-sky-500 hover:text-white "
              >
                Login
              </button>
            </div>
            <div>
              {error !== "" && (
                <p className="rounded bg-red-400 py-2 text-center capitalize text-white">
                  {error}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
