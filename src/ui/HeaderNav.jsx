import { navLists } from "../constants";

function HeaderNav() {
  return (
    <div className="flex flex-1 justify-center max-sm:hidden">
      {navLists.map((nav) => (
        <div
          key={nav}
          className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
        >
          {nav}
        </div>
      ))}
    </div>
  );
}

export default HeaderNav;
