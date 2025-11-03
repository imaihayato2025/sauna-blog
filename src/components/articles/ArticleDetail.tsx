import Image from "next/image";

type ArticleDetailProps = {
  id: string;
  eyecatch: string;
  title: string;
};

export default function ArticleDetail({
  id,
  eyecatch,
  title,
}: ArticleDetailProps) {
  return (
    <div className="flex w-full sm:w-[48%] md:w-[31%]">
      <div className="relative aspect-[16/9] w-[40%] sm:w-full">
        <Image
          src={eyecatch}
          alt={title}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <div className="w-full bg-amber-500 p-2">
        <h3 className="text-[clamp(0.75rem, 0.667rem + 0.42vw, 1rem)] font-bold">
          {title}
        </h3>
      </div>
    </div>
  );
}
