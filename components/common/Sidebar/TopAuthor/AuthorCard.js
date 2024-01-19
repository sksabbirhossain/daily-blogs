import Image from "next/image";

import defaultPic from "@/public/default.jpg";

const AuthorCard = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-[40px] w-[40px] items-center rounded-full ring-2 ring-[#00AAA1]">
        <Image
          src={defaultPic}
          width={40}
          height={40}
          className="rounded-full"
          alt="user"
        />
      </div>
      <div>
        <h1 className="text-[15px] font-normal text-[#222] dark:text-gray-200">
          Sk Sabbir Hossain
        </h1>
        <p className="text-xs text-[#555] dark:text-gray-400">
          Web Developer, Blogger, activist
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
