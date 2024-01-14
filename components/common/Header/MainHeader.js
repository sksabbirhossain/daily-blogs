import Image from "next/image";
import Link from "next/link";
import HeaderItems from "./HeaderItems";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

const MainHeader = () => {
  return (
    <header className="sticky top-0 z-50 h-auto w-full bg-[#cbf1f1]/80 py-[8px] shadow-lg shadow-[#00AAA1]/20 backdrop-blur transition-colors lg:h-[50px] lg:py-0">
      <div className="container mx-auto h-full w-full px-2 sm:px-0">
        <div className="flex h-full w-full items-center justify-between">
          {/* logo */}
          <div className="hidden sm:flex">
            <Link href="/">
              <Image src="/logo1.png" width={200} height={50} alt="logo" />
            </Link>
          </div>
          {/* mobile logo */}
          <div className="flex pr-2 sm:hidden sm:pr-0">
            <Link href="/">
              <Image src="/mobile-logo.png" width={50} height={50} alt="logo" />
            </Link>
          </div>
          {/* search bar */}
          <div className="flex items-center">
            <SearchBar />
          </div>

          {/* nav items */}
          <div className="hidden lg:block">
            <HeaderItems />
          </div>
          {/* menu icon */}
          <MenuIcon />
        </div>
      </div>
      {/* mobile menu icon */}
      <MobileMenu />
    </header>
  );
};

export default MainHeader;
