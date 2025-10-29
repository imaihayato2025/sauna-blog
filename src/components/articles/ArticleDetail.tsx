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
    <div className="flex w-full">
      <div className="relative h-32 w-[30%]">
        <Image
          src={eyecatch}
          alt={title}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <div className="w-[70%] p-2">
        <h3 className="">{title}</h3>
      </div>
    </div>
  );
}
