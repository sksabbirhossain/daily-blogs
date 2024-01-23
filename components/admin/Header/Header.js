import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import SidebarOpenButton from "./SidebarOpenButton";

const Header = async () => {
  const { user } = await getServerSession(authOptions);
  return (
    <div className="fixed top-0 z-50 flex h-[50px] w-full items-center justify-between bg-white px-2 text-white sm:px-0">
      <div className="flex w-full items-center justify-between sm:pe-2 sm:ps-4">
        <div className="flex items-center space-x-3">
          <SidebarOpenButton />
          <div className="hidden sm:flex">
            <Link href="/admin/dashboard">
              <Image src="/logo1.png" width={200} height={50} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="font-medium capitalize dark:text-black">
            {user?.name}
          </h1>
          <Image
            src={user?.picture ? user.picture : "/default.jpg"}
            alt="user"
            width={100}
            height={100}
            className="h-10 w-10 rounded-full ring-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
