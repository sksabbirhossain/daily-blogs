import defaultPic from "@/public/default.jpg";
import Image from "next/image";

const Comment = () => {
  return (
    <div className="flex w-full gap-3">
      <Image
        src={defaultPic}
        width={100}
        height={100}
        alt="user image"
        className="mt-1 h-10 w-10 rounded-full ring-2 ring-[#00AAA1] "
      />
      <p className="text-sm dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate
        iste inventore dolorum, minima reprehenderit vero nobis doloremque hic
        perspiciatis soluta eveniet sequi cupiditate distinctio, impedit quis
        sunt adipisci velit!
      </p>
    </div>
  );
};

export default Comment;
