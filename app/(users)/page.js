import HeroSection from "@/components/users/Home/HeroSection";
import RecentlyPostedSection from "@/components/users/Home/RecentlyPosted/RecentlyPostedSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10  px-2 sm:px-0">
      <HeroSection />
      <RecentlyPostedSection />
    </div>
  );
}
