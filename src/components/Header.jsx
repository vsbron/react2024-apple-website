import { appleImg, searchImg, bagImg } from "../utils";

import HeaderNav from "../ui/HeaderNav";

function Header() {
  // Returned JSX
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <HeaderNav />
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
