import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-52" src={assets.logo} />
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
