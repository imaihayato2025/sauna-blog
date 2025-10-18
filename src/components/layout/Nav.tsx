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
        className={`relative z-10 flex h-10 w-10 flex-col items-center justify-center ${isOpen ? "bg-blue-600" : "bg-black"}`}
      >
        {isOpen ? (
          <HiX size={28} className="text-white" />
        ) : (
          <HiMenu size={28} className="text-white" />
        )}
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
