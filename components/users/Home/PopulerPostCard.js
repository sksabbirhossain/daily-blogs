import moment from "moment";
import Image from "next/image";
import Link from "next/link";

import defaultPic from "@/public/default.jpg";

const PopulerPostCard = ({ blog }) => {
  const { title, slug, category, description, picture, createdAt } = blog || {};
  return (
    <div>
      <Link href={`/blogs/${slug}`}>
        <div className="space-y-2">
          <p className="text-xs font-bold text-[#00AAA1]">{category?.name}</p>
          <h1 className="text-md font-medium text-[#222]">
            {title.substr(0, 35)}
          </h1>
          <p className="flex flex-wrap items-center gap-1 space-x-3 text-xs text-[#777]">
            <span className="flex items-center">
              <span className="h-5 w-5 rounded-full ring-1">
                <Image
                  src={defaultPic}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="user"
                />
              </span>
              <span className="ml-1">Admin</span>
            </span>
            <span className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </span>
              {moment(createdAt).format("DD MMMM YYYY")}
            </span>
            <span className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              3 min. to read
            </span>
          </p>
          <p className="text-sm font-normal text-[#555]">
            {description.substr(0, 140)}...
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PopulerPostCard;
