import React from "react";
import Link from "next/link";
import Category from "@/components/ui/Category";

export default function CategoryList() {
  const Categoryitems = [
    { label: "全て", value: "" },
    { label: "東京", value: "東京" },
    { label: "千葉", value: "千葉" },
    { label: "神奈川", value: "神奈川" },
    { label: "静岡", value: "静岡" },
    { label: "大阪", value: "大阪" },
  ];

  return (
    <div className="mb-10 flex flex-wrap justify-start gap-3 rounded-full text-white">
      {Categoryitems.map((item) => (
        <Link
          key={item.value}
          href={`/articles${item.value ? `?category=${item.value}` : ""}`}
        >
          <Category label={item.label} />
        </Link>
      ))}
    </div>
  );
}
