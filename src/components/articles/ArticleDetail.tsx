import Image from "next/image";
import Link from "next/link";

type ArticleDetailProps = {
  id: string;
  category: string;
  title: string;
  eyecatch: string;
  date: string;
};

export default function ArticleDetail({
  id,
  category,
  title,
  eyecatch,
  date,
}: ArticleDetailProps) {
  return (
    <Link href={`/articles/${id}`}>
      <div className="flex w-full border-b border-[#dadce0] pb-4 sm:w-[48%] sm:flex-col md:w-[31%]">
        <div className="relative aspect-[16/9] w-[35%] sm:w-full">
          <Image
            src={eyecatch}
            alt={title}
            fill
            className="rounded-md object-cover"
          />
        </div>

        <div className="w-[65%] p-2 sm:w-full">
          <div className="flex items-center gap-2 text-[#949497]">
            <span className="bg-black px-1 text-[10px] text-white">
              {category}
            </span>
            <span className="text-[10px]">{date}</span>
          </div>
          <h3 className="text-[clamp(0.75rem, 0.667rem + 0.42vw, 1rem)] font-bold">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
