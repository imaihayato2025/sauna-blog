"use client";
import { useState } from "react"


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
     <button onClick={navToggle} className={`absolute top-5 right-5 w-10 h-10 z-10 bg-red-500 ${isOpen ? "bg-blue-600": "bg-gray-600"}`}></button>
     <ul className={`flex flex-col justify-center items-center absolute right-0 top-0 bg-black w-64 h-screen ${isOpen ? "translate-x-0": "translate-x-full"}`}>
      {navItems.map((item) => (
        <li key={item.label} className="text-white">{item.label}</li>
      ))}
     </ul>
    </nav>



  );
}
