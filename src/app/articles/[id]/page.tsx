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
    <div className="mx-auto mt-10 mb-20 w-[90%] max-w-5xl md:w-2/3">
      <div className="relative mb-4 aspect-[16/9] w-full">
        <Image
          src={article.eyecatch?.url || "/noimage.png"}
          alt={article.title}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <span className="bg-black px-1 py-0.5 text-base text-white">
        {article.category}
      </span>
      <h3 className="pb-8 text-left text-2xl font-bold">{article.title}</h3>

      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
