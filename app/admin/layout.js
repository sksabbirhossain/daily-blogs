import "@/app/globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Fastribo Blogs - admin Login page",
  description: "Generated by Next.js",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function AdminMainLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:bg-gray-200 dark:text-black`}>
        {children}
      </body>
    </html>
  );
}
