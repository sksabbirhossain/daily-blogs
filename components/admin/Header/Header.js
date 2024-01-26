import Image from "next/image";
import Link from "next/link";
import HeaderAdminInfo from "./HeaderAdminInfo";
import SidebarOpenButton from "./SidebarOpenButton";

const Header = async () => {
  return (
    <div className="fixed top-0 z-50 flex h-[50px] w-full items-center justify-between bg-white px-2 shadow-sm sm:px-0">
      <div className="flex w-full items-center justify-between sm:pe-2 sm:ps-4">
        <div className="flex items-center space-x-3">
          <SidebarOpenButton />
          <div className="hidden sm:flex">
            <Link href="/admin/dashboard">
              <Image
                src="/lightLogo.png"
                width={200}
                height={50}
                className="h-[50px] object-cover py-1"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <HeaderAdminInfo />
      </div>
    </div>
  );
};

export default Header;
