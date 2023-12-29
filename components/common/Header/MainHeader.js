import Link from "next/link";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import navlink from "./navLink";

const MainHeader = () => {
  return (
    <header className="bg-[#5c7c81] shadow-sm shadow-green-100 backdrop-blur transition-colors w-full h-auto py-[8px] lg:py-0 lg:h-[50px] z-50 sticky top-0">
      <div className="w-full h-full container mx-auto px-2 sm:px-0">
        <div className="w-full h-full flex items-center justify-between">
          {/* logo */}
          <div className="hidden sm:flex">
            <h4 className="text-primary text-xl text-yellow-50">Daily Blogs</h4>
          </div>
          {/* mobile logo */}
          <div className="sm:hidden flex pr-2 sm:pr-0">
            <h4 className="text-primary text-xl">Daily</h4>
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
                  className="text-gray-300 hover:text-gray-400 duration-150 ease-linear"
                  key={i}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
              <li className="text-gray-300 hover:text-gray-400 duration-150 ease-linear flex items-center">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
