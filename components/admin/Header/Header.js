import Image from "next/image";
import Link from "next/link";
import SidebarOpenButton from "./SidebarOpenButton";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex h-[50px] w-full items-center justify-between bg-[#00AAA1]/80 px-2 text-white shadow-sm shadow-[#00AAA1] backdrop-blur transition-colors sm:px-0">
      <div className="flex w-full items-center justify-between sm:pe-2 sm:ps-4">
        <div className="flex items-center space-x-3">
          <SidebarOpenButton />
          <div className="hidden sm:flex">
            <Link href="/admin/dashboard">
              <Image src="/logo1.png" width={200} height={50} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="">Admin</div>
      </div>
    </div>
  );
};

export default Header;
