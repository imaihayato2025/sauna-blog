import React from "react";

type CategoryProps = {
  label: string;
  className: string;
};

export default function Categories({ label, className }: CategoryProps) {
  return (
    <div
      className={`text-[14px]sm:px-4 rounded-full px-3 py-0.5 sm:text-base ${className}`}
    >
      {label}
    </div>
  );
}
