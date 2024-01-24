import Sidebar from "@/components/common/Sidebar/Sidebar";
import HeroSection from "@/components/users/Home/HeroSection";
import RecentlyPostedSection from "@/components/users/Home/RecentlyPosted/RecentlyPostedSection";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <main>
      {/* banner section */}
      <Suspense fallback={<p>Loading...</p>}>
        <HeroSection />
      </Suspense>

      <section className="container mx-auto px-2 sm:px-0">
        <div className="md:gird-cols-2 grid grid-cols-1 py-7 sm:py-12 md:gap-7 lg:grid-cols-3">
          {/* left side */}
          <div className="md:col-span-2">
            <Suspense fallback={<p>Loading...</p>}>
              <RecentlyPostedSection searchParams={searchParams} />
            </Suspense>
          </div>
          {/* right sidebar */}
          <div className="pt-5 sm:pt-0 md:col-span-1">
            <Sidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
