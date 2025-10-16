"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  const navClose = () => {
    setIsOpen(false);
  };

  const navItems = [{ label: "Top" }, { label: "Blog" }];

  return (
    <nav className="flex">
      <button
        onClick={navToggle}
        className={`absolute top-5 right-5 z-10 h-7 w-7 bg-red-500 ${isOpen ? "bg-blue-600" : "bg-gray-600"}`}
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>
      <ul
        className={`absolute top-0 right-0 flex h-screen w-64 flex-col items-center justify-center bg-black ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navItems.map((item) => (
          <li key={item.label} className="text-white">
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
