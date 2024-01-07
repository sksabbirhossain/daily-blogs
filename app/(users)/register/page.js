import Link from "next/link";

export const metadata = {
  title: "Register Accout - Daily blogs",
};

const Register = () => {
  return (
    <div className="flex w-full h-screen -mt-[50px] justify-center items-center">
      <div className="bg-gray-100 p-3 rounded py-10 shadow-sm shadow-[#00AAA1]/50">
        <form action="">
          <div className="space-y-3">
            <div className="space-y-2">
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Name
                </label>
              </div>
              <input
                className="border border-[#00AAA1] focus:outline-[#00AAA1] rounded px-1 py-2"
                type="text"
                name="name"
                placeholder="your name here..."
              />
            </div>
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
      </div>
    </div>
  );
};

export default Register;
