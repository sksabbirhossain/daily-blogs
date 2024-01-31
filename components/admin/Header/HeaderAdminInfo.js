"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const HeaderAdminInfo = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2">
      <h1 className="font-semibold text-sm capitalize dark:text-black">
        {session?.user?.name}
      </h1>
      <Image
        src={session?.user?.picture ? session?.user.picture : "/default.jpg"}
        alt="user"
        width={100}
        height={100}
        className="h-8 w-8 rounded-full ring-2 ring-[#00AAA1]"
      />
    </div>
  );
};

export default HeaderAdminInfo;
