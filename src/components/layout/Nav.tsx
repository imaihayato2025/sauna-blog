"use client";
import Link from "next/link";
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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 背景（オーバーレイ）がクリックされた時のみ閉じる
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "トップ", href: "/" },
    { label: "ブログ", href: "/articles" },
  ];

  return (
    <nav className="flex">
      <button
        onClick={navToggle}
        className={`absolute top-3 right-3 z-20 flex h-12 w-12 cursor-pointer flex-col items-center justify-center ${isOpen ? "" : ""}`}
      >
        <div className={`transition-all duration-300 ease-in-out`}>
          {isOpen ? (
            <HiX size={32} className="text-white" />
          ) : (
            <BiMenuAltLeft size={32} className="text-black" />
          )}
        </div>
      </button>

      {isOpen && (
        <div onClick={handleBackdropClick} className="fixed inset-0 z-[5]" />
      )}

      <ul
        className={`fixed top-0 right-0 z-10 flex h-screen w-[60%] transform flex-col items-center justify-center gap-6 bg-[#222121] transition-transform duration-300 ease-in-out md:w-[30%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navItems.map((item) => (
          <li key={item.label} className="text-base font-bold text-white">
            <Link href={item.href} onClick={navClose}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
