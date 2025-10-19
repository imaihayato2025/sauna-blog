"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  const navClose = () => {
    setIsOpen(false);
  };

  const navItems = [{ label: "トップ" }, { label: "ブログ" }];

  return (
    <nav className="flex">
      <button
        onClick={navToggle}
        className={`absolute top-3 right-3 z-20 flex h-12 w-12 flex-col items-center justify-center ${isOpen ? "" : ""}`}
      >
        <div className="transition-all duration-300 ease-in-out">
          {isOpen ? (
            <HiX size={32} className="text-white" />
          ) : (
            <BiMenuAltLeft size={32} className="text-black" />
          )}
        </div>
      </button>
      <ul
        className={`absolute top-0 right-0 z-10 flex h-screen w-[60%] transform flex-col items-center justify-center gap-6 bg-[#222121] transition-transform duration-300 ease-in-out md:w-[30%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navItems.map((item) => (
          <li key={item.label} className="text-base font-bold text-white">
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
