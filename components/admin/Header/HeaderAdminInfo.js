"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const HeaderAdminInfo = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2">
      <h1 className="font-medium capitalize dark:text-black">
        {session?.user?.name}
      </h1>
      <Image
        src={session?.user?.picture ? session?.user.picture : "/default.jpg"}
        alt="user"
        width={100}
        height={100}
        className="h-10 w-10 rounded-full ring-2"
      />
    </div>
  );
};

export default HeaderAdminInfo;
