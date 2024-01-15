import Link from "next/link";

export default function NotFound() {
  return (
    <div className="-mt-[50px] flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#00AAA1]">404</h1>
        <p className="pb-3 text-sm font-semibold capitalize text-[#555] dark:text-gray-400">
          the page you are looking for does not exist!
        </p>
        <button className="rounded bg-[#00AAA1] px-4 py-1 text-white">
          <Link href="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
}
