import Image from "next/image";
import React from "react";

const AuthorCard = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-[40px] h-[40px] flex items-center">
        <Image
          src="/blog.jpg"
          width={40}
          height={40}
          alt="author"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h5 className="font-normal text-[15px]">Sk Sabbir Hossain</h5>
        <p className="text-xs text-gray-500">
          Web Developer, Blogger, activist
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
