import { client } from "@/libs/microcms";

type PostsProps = {
  id: string;
  title: string;
};

async function getBlogPosts(): Promise<PostsProps[]> {
  const data = await client.get({
    endpoint: "saunablog",
    queries: {
      fields: "id,title",
      limit: 100,
    },
  });
  return data.contents;
}

export default async function page() {
  const posts = await getBlogPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
