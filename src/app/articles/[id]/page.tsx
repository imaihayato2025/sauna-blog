import { client } from "@/libs/microcms";

type BlogPost = {
  params: Promise<{ id: string }>;
  id: string;
  title: string;
};

type Params = {
  id: string;
};

function getBlogPost(id: string): Promise<BlogPost> {
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
  const post = await getBlogPost(id);
  return (
    <div>
      <div key={post.id}>{post.title}</div>
    </div>
  );
}
