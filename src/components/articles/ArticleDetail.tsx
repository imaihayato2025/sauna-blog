import Image from "next/image";

type ArticleDetailProps = {
  src: string;
  title: string;
};

export default function ArticleDetail({ src, title }: ArticleDetailProps) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <Image src={src} alt={title} fill className="object-cover" />
      </div>

      <div className="w-full p-2">
        <h3 className="">{title}</h3>
      </div>
    </div>
  );
}
