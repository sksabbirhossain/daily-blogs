import defaultPic from "@/public/default.jpg";
import Image from "next/image";

const Comment = ({ comment }) => {
  const { comment: text, createdBy } = comment || {};
  return (
    <div className="flex w-full gap-3">
      <Image
        src={createdBy?.picture ? createdBy?.picture : defaultPic}
        width={100}
        height={100}
        alt="user image"
        className="mt-1 h-10 w-10 rounded-full ring-2 ring-[#00AAA1] "
      />
      <div className="space-y-1">
        <h3 className="text-sm font-semibold capitalize">{createdBy?.name}</h3>
        <p className="text-sm dark:text-gray-300">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
