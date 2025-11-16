import React from "react";
import Link from "next/link";
import Category from "@/components/ui/Category";

export default function CategoryList() {
  const Categoryitems = [
    { label: "全て" },
    { label: "東京" },
    { label: "千葉" },
    { label: "神奈川" },
    { label: "静岡" },
    { label: "大阪" },
  ];

  return (
    <div className="mb-10 flex flex-wrap justify-start gap-3 rounded-full text-white">
      {Categoryitems.map((item) => (
        <Category label={item.label} />
      ))}
    </div>
  );
}
