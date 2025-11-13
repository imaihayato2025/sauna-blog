import Link from "next/link";
import { client } from "@/libs/microcms";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";

type ArticleProps = {
  id: string;
  title: string;
  publishedAt?: string;
};

type ArticleNavigationProps = {
  currentId: string;
};

export default async function ArticleNavigation({
  currentId,
}: ArticleNavigationProps) {
  const articles = await client.get<{ contents: ArticleProps[] }>({
    endpoint: "saunablog",
    queries: {
      fields: "id,title,published",
      limit: 100,
      orders: "-publishedAt",
    },
  });

  const contents = articles.contents;
  const currentIndex = contents.findIndex((a) => a.id === currentId);

  const prev = contents[currentIndex + 1];
  const next = contents[currentIndex - 1];
  return (
    <div className="flex w-full justify-between">
      {prev ? (
        <Link href={`/articles/${prev.id}`}>
          <div className="flex flex-col items-center">
            <HiArrowNarrowLeft className="black pb-1 text-4xl sm:pb-2 sm:text-6xl" />
            <p className="text-[10px] sm:text-[12px]">前の記事へ</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link href={`/articles/${next.id}`}>
          <div className="flex flex-col items-center">
            <HiArrowNarrowRight className="black pb-1 text-4xl sm:pb-2 sm:text-6xl" />
            <p className="text-[10px] sm:text-[12px]">次の記事へ</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
