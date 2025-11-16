import { client } from "@/libs/microcms";
import ArticleDetail from "./ArticleDetail";
import CategoryList from "@/components/ui/CategoryList";

type PostsProps = {
  id: string;
  category: string;
  title: string;
  eyecatch?: {
    url: string;
  };
  date: string;
};
async function getBlogPosts(): Promise<PostsProps[]> {
  const data = await client.get({
    endpoint: "saunablog",
    queries: {
      fields: "id,category,title,eyecatch,date",
      limit: 6,
    },
  });
  return data.contents;
}

export default async function ArticleList() {
  const articles = await getBlogPosts();

  return (
    <>
      <CategoryList />
      <div className="flex w-full flex-col justify-between gap-y-4 sm:flex-row sm:flex-wrap sm:gap-y-8">
        {articles.map((article) => (
          <ArticleDetail
            key={article.id}
            id={article.id}
            category={article.category}
            title={article.title}
            eyecatch={article.eyecatch?.url || "/noimage.png"}
            date={new Date(article.date).toLocaleDateString("ja-JP")}
          />
        ))}
      </div>
    </>
  );
}
