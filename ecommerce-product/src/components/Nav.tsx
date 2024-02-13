import React from "react";
interface Props extends React.ComponentPropsWithRef<"nav"> {}

import { navItem } from "../utils";

import shopIcon from "../assets/images/icon-cart.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import avatar from "../assets/images/image-avatar.png";
import logo from "../assets/images/logo.svg";

export const Nav = ({ ...rest }: Props) => {
  return (
    <nav
      {...rest}
      className="flex justify-between items-center p-2  w-full bg-white  border-b "
    >
      <div className="flex items-center gap-x-10">
        <div className="flex items-center  gap-x-2">
          <img src={menuIcon} alt="menuIcon" className="large:hidden" />
          <img src={logo} alt="logo" />
        </div>

        <div className="hidden large:block">
          <ul className="flex items-center gap-x-4 ">
            {navItem.map((item) => (
              <li
                key={item.id}
                className="text-gray-400 hover:text-gray-600 cursor-pointer transition-all font-medium"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center space-x-7">
        <div className="relative">
          <img src={shopIcon} alt="shop" className="size-7" />
          <span className="absolute -top-2 -right-2 bg-orange text-white rounded-full  min-w-4 min-h-4 flex items-center  justify-center">
            0
          </span>
        </div>
        <img
          src={avatar}
          alt="Avatar"
          className="size-10 ring ring-orange rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};
