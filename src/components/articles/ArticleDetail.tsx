import Image from "next/image";

type ArticleDetailProps = {
  id: string;
  category: string;
  title: string;
  eyecatch: string;
};

export default function ArticleDetail({
  id,
  category,
  title,
  eyecatch,
}: ArticleDetailProps) {
  return (
    <div className="flex w-full sm:w-[48%] sm:flex-col md:w-[31%]">
      <div className="relative aspect-[16/9] w-[40%] sm:w-full">
        <Image
          src={eyecatch}
          alt={title}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <div className="w-[60%] bg-amber-500 p-2 sm:w-full">
        <span className="bg-black px-1 py-0.5 text-[12px] text-white">
          {category}
        </span>
        <h3 className="text-[clamp(0.75rem, 0.667rem + 0.42vw, 1rem)] font-bold">
          {title}
        </h3>
      </div>
    </div>
  );
}
