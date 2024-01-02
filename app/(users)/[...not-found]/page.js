import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full h-screen -mt-[50px]">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#00AAA1]">404</h1>
        <p className="text-sm font-semibold text-[#555] capitalize pb-3">
          the page you are looking for does not exist!
        </p>
        <button className="bg-[#00AAA1] rounded px-4 py-1 text-white">
          <Link href="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
}
