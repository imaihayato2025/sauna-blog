import React from "react";

type CategoryProps = {
  label: string;
};

export default function Categories({ label }: CategoryProps) {
  return (
    <div className="rounded-full bg-black px-3 py-0.5 text-[14px] text-white sm:px-4 sm:text-base">
      {label}
    </div>
  );
}
