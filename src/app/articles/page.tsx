import { client } from "@/libs/microcms";
import ArticleDetail from "@/components/articles/ArticleDetail";
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
async function getBlogPosts(category: string): Promise<PostsProps[]> {
  const queries: any = {
    fields: "id,category,title,eyecatch,date",
    limit: 100,
  };

  if (category) {
    queries.filters = `category[contains]${category}`;
  }

  const data = await client.get({
    endpoint: "saunablog",
    queries,
  });

  return data.contents;
}

export default async function AllPostsPage({ searchParams }: any) {
  const category = searchParams.category || "";
  const articles = await getBlogPosts(category);
  return (
    <>
      <CategoryList />
      {articles.length === 0 ? (
        <div className="w-full py-10 text-center">
          <p className="text-xl font-semibold text-gray-600">
            まだ記事がありません。
          </p>
          <p className="mt-2 text-sm text-gray-500">
            他のカテゴリを選択するか、記事の追加をお待ちください。
          </p>
        </div>
      ) : (
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
      )}
    </>
  );
}
