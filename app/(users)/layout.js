import Footer from "@/components/common/Footer/Footer";
import MainHeader from "@/components/common/Header/MainHeader";
import Providers from "@/utils/Providers";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Fastribo Blogs - Uncover Daily Insights, Inspiration, and Knowledge",
  description:
    "Explore a world of daily wonders with Fastribo Blogs. Immerse yourself in a diverse range of articles, from insightful reflections to practical tips. Stay informed, inspired, and engaged every day with our thoughtfully curated content. Join us on a journey of continuous learning and discovery. Your daily dose of knowledge and inspiration awaits. Start exploring now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#fff] dark:bg-slate-900`}>
        <Providers>
          <Toaster position="top-right" />
          <MainHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
