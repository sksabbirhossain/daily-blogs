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
    <div className="flex w-full h-screen justify-center items-center">
      <div className="max-w-[350px] -mt-[50px] bg-gray-100 p-3 rounded py-10 shadow-sm shadow-[#00AAA1]/50">
        <form onSubmit={loginHandler}>
          <div className="space-y-3">
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
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="hover:bg-[#00AAA1] border border-[#00AAA1] rounded py-2 w-full font-medium hover:text-white bg-white duration-150 ease-in"
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
              <p className="text-center text-xs font-medium text-[#00AAA1] capitalize">
                <Link href="/register">Create your account</Link>
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

export default LoginComponent;
