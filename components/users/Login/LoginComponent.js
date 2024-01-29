"use client";
import GithubLogin from "@/components/users/Login/GithubLogin";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(null);
  const [commonError, setCommonError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callBack = searchParams.get("callbackUrl");

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        router.replace(callBack || "/");
        setLoading(false);
      } else {
        setCommonError("Invalid credentials!");
        setLoading(false);
      }
    } catch (err) {
      setCommonError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="-mt-[50px] max-w-[350px] rounded bg-gray-100 p-3 pb-10 shadow-sm shadow-[#00AAA1]/50 dark:bg-slate-800">
        <h1 className="py-5 text-center text-xl text-[#222] dark:text-gray-200">
          Login Your Account.
        </h1>
        <form onSubmit={loginHandler}>
          <div className="space-y-3">
            <div className="space-y-2">
              <div>
                <label
                  htmlFor=""
                  className="text-sm font-medium text-[#222] dark:text-gray-200"
                >
                  Email
                </label>
              </div>
              <input
                className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-[#00AAA1] dark:bg-slate-700 dark:text-gray-200"
                type="email"
                name="email"
                placeholder="Your email here..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div>
                <label
                  htmlFor=""
                  className="text-sm font-medium text-[#222] dark:text-gray-200"
                >
                  Password
                </label>
              </div>
              <input
                className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-[#00AAA1] dark:bg-slate-700 dark:text-gray-200"
                type="password"
                name="password"
                placeholder="Your password here..."
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded border border-[#00AAA1] bg-white py-2 font-medium duration-150 ease-in hover:bg-[#00AAA1] hover:text-white disabled:cursor-not-allowed disabled:border-gray-500/65 disabled:bg-gray-500/65 disabled:text-gray-200 dark:bg-[#00AAA1] dark:text-gray-100 dark:hover:bg-[#329792]"
              >
                {loading ? (
                  <p className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 animate-spin"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </p>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <div className="pt-2 text-center font-bold text-[#222] dark:text-gray-200">
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
