import Image from "next/image";

const AdminLogin = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center px-2 sm:px-0">
      <div className="bg-gray-100 shadow-md rounded-md p-3 py-5 space-y-5">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/mobile-logo.png"
            width={200}
            height={200}
            alt="logo"
            className="w-10 h-10 object-cover"
          />
          <h1 className="text-xl font-medium capitalize drop-shadow text-[#00AAA1]">
            Admin Login
          </h1>
        </div>
        <form action="">
          <div className="space-y-3">
            <div className="space-y-1">
              <div>
                <label htmlFor="">Email</label>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email Here..."
                className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
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
                className="w-full px-1 py-2 rounded border border-[#00AAA1] focus:outline-1 focus:outline-[#00AAA1]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="border border-[#00AAA1] bg-[#00AAA1] hover:text-white hover:bg-sky-500 duration-150 ease-linear text-gray-200 py-2 px-5 w-full rounded "
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
