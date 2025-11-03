import { client } from "@/libs/microcms";
import ArticleDetail from "./ArticleDetail";

type PostsProps = {
  id: string;
  title: string;
  eyecatch?: {
    url: string;
  };
};
async function getBlogPosts(): Promise<PostsProps[]> {
  const data = await client.get({
    endpoint: "saunablog",
    queries: {
      fields: "id,title,eyecatch",
      limit: 6,
    },
  });
  return data.contents;
}

export default async function ArticleList() {
  const articles = await getBlogPosts();

  return (
    <div className="flex w-full flex-col justify-between gap-y-8 sm:flex-row sm:flex-wrap">
      {articles.map((article) => (
        <ArticleDetail
          key={article.id}
          id={article.id} // ✅ 追加
          eyecatch={article.eyecatch?.url || "/noimage.png"}
          title={article.title}
        />
      ))}
    </div>
  );
}
