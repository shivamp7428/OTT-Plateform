import React from 'react';
import { NavLink } from 'react-router-dom';
import { CircleUser, Popcorn, TvMinimal } from 'lucide-react';
import { CiHome } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaRunning } from "react-icons/fa";
import { LiaVideoSolid } from "react-icons/lia";
import { BiCategoryAlt } from "react-icons/bi";

const Sidebar = () => {
  const menuItems = [
    { icon: <CiHome />, name: 'Home', path: '/Home' },
    { icon: <IoIosSearch />, name: 'Search', path: '/search' },
    { icon: <TvMinimal />, name: 'TV', path: '/tv' },
    { icon: <Popcorn />, name: 'Movies', path: '/movies' },
    { icon: <FaRunning />, name: 'Sports', path: '/sports' },
    { icon: <LiaVideoSolid />, name: 'Sparks', path: '/sparks' },
    { icon: <BiCategoryAlt />, name: 'Categories', path: '/' },
    { icon: <CircleUser />, name: 'My Space', path: '/myspace' },
  ];

  return (
    <div className="fixed left-0 backdrop-blur-lg top-0 z-30 h-full w-20 hover:w-45 transition-all duration-300 overflow-hidden p-4 shadow-lg flex flex-col  justify-center gap-4">
      {menuItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded-md transition hover:bg-white hover:text-black ${
              isActive ? 'bg-white text-black' : 'text-white'
            }`
          }
        >
          <span className="text-xl">{item.icon}</span>
          <span className="whitespace-nowrap overflow-hidden transition-all duration-300">
            {item.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
