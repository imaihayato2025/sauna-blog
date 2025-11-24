import ArticleNavigation from "@/components/articles/ArticleNavigation";
import Button from "@/components/ui/Button";
import { client } from "@/libs/microcms";
import Image from "next/image";

type ArticleProps = {
  id: string;
  category: string;
  title: string;
  eyecatch?: {
    url: string;
  };
  content: string;
};

type Params = {
  id: string;
};

function getBlogPost(id: string): Promise<ArticleProps> {
  const data = client.get({
    endpoint: "saunablog",
    contentId: id,
  });
  return data;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const article = await getBlogPost(id);
  return (
    <div className="mx-auto mt-2 mb-10 w-[100%] max-w-5xl sm:mt-10 sm:mb-20 md:w-2/3">
      <span className="bg-black px-1 py-0.5 text-[14px] text-white">
        {article.category}
      </span>
      <h3 className="pb-4 text-left text-base font-bold">{article.title}</h3>

      <div className="relative mb-4 aspect-[16/9] w-full">
        <Image
          src={article.eyecatch?.url || "/noimage.png"}
          alt={article.title}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div
        className="blog_title section_title sentence blog_detail prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <div className="mt-2">
        <ArticleNavigation currentId={id} />
      </div>
      <div className="flex justify-center">
        <Button label="記事一覧へ" />
      </div>
    </div>
  );
}
