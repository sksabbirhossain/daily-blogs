import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full py-10 space-y-5">
      <h2 className="text-4xl font-bold text-[#00AAA1]">404</h2>
      <p className="text-sm text-[#555]">
        the page you are looking for does not exist!
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
