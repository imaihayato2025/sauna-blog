import { client } from "@/libs/microcms";
import ArticleDetail from "./ArticleDetail";

type PostsProps = {
  id: string;
  title: string;
  src: string;
};

async function getBlogPosts(): Promise<PostsProps[]> {
  const data = await client.get({
    endpoint: "saunablog",
    queries: {
      fields: "id,title,src",
      limit: 6,
    },
  });
  return data.contents;
}

export default async function ArticleList() {
  const articles = await getBlogPosts();
  return (
    <div>
      {articles.map((article) => (
        <ArticleDetail src={article.src} title={article.title} />
      ))}
    </div>
  );
}
