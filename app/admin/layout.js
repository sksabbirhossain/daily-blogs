import "@/app/globals.css";
import Providers from "@/utils/Providers";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Daily blogs - admin Login page",
  description: "Generated by Next.js",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function AdminMainLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:bg-white dark:text-black`}>
        <Providers>
        <Toaster position="top-right" />
          {children}</Providers>
      </body>
    </html>
  );
}