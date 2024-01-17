import HeroSection from "@/components/users/Home/HeroSection";
import RecentlyPostedSection from "@/components/users/Home/RecentlyPosted/RecentlyPostedSection";

export default function Home({ searchParams }) {
  return (
    <div className="space-y-10">
      <HeroSection />
      <RecentlyPostedSection searchParams={searchParams} />
    </div>
  );
}
