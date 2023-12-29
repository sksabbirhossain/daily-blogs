import Image from "next/image";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import navlink from "./navLink";

const MainHeader = () => {
  return (
    <header className="bg-[#cbf1f1]/80 shadow-sm shadow-[#00AAA1]/50 backdrop-blur transition-colors w-full h-auto py-[8px] lg:py-0 lg:h-[50px] z-50 sticky top-0">
      <div className="w-full h-full container mx-auto px-2 sm:px-0">
        <div className="w-full h-full flex items-center justify-between">
          {/* logo */}
          <div className="hidden sm:flex">
            <Link href="/">
              <Image src="/logo1.png" width={200} height={50} alt="logo" />
            </Link>
          </div>
          {/* mobile logo */}
          <div className="sm:hidden flex pr-2 sm:pr-0">
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
            <ul className="flex items-center space-x-5 text-sm text-textBlack cursor-pointer">
              {navlink?.map((item, i) => (
                <li
                  className="text-[#222] hover:text-[#00AAA1] duration-150 ease-linear"
                  key={i}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
              <li className="text-[#222] hover:text-[#00AAA1] duration-150 ease-linear flex items-center">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </p>
              </li>
            </ul>
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
