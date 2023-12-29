import Image from "next/image";
import React from "react";
import Card from "./Card";
import PopulerPostCard from "./PopulerPostCard";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F8F7] w-full">
      <div className="container mx-auto">
        <div className="grid gap-5 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 py-10">
          {/* left side */}
          <div className="md:col-span-2">
            <div className="pb-7 md:pb-14">
              <h2 className="text-xl font-medium">
                <span className="bg-primary px-1 text-white">Featured</span>{" "}
                This month
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card />
              <Card />
            </div>
          </div>
          {/* right side */}
          <div className="">
            <div className="pb-7 md:pb-14">
              <h2 className="text-xl font-medium">
                <span className="bg-primary px-1 text-white">populer</span>{" "}
                Posted
              </h2>
            </div>
            <div className="space-y-7">
              <PopulerPostCard />
              <PopulerPostCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
