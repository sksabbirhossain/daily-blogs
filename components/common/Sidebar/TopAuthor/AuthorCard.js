import Image from "next/image";

import defaultPic from "@/public/default.jpg";

const AuthorCard = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-[40px] h-[40px] ring-2 rounded-full flex items-center">
        <Image
          src={defaultPic}
          width={40}
          height={40}
          className="rounded-full"
          alt="user"
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
