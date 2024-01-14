"use client";
import GithubLogin from "@/components/users/Login/GithubLogin";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(null);
  const [commonError, setCommonError] = useState("");

  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      setCommonError("");
      setError("");
      const user = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (user.ok && user.status === 200) {
        toast.success("User Login Successfully");
        router.push("/");
      } else {
        setCommonError("Invalid credentials!");
      }
    } catch (err) {
      setCommonError(err.message);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="-mt-[50px] max-w-[350px] rounded bg-gray-100 p-3 py-10 shadow-sm shadow-[#00AAA1]/50">
        <form onSubmit={loginHandler}>
          <div className="space-y-3">
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
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded border border-[#00AAA1] bg-white py-2 font-medium duration-150 ease-in hover:bg-[#00AAA1] hover:text-white"
              >
                Login
              </button>
            </div>
            <div className="pt-2 text-center font-bold">
              <span> - </span>OR<span> - </span>
            </div>
            <div className="pt-2">
              <GithubLogin />
            </div>
            <div className="pt-2">
              <p className="text-center text-xs font-medium capitalize text-[#00AAA1]">
                <Link href="/register">Create your account</Link>
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

export default LoginComponent;
