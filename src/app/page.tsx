import ArticleList from "@/components/articles/ArticleList";
import Hero from "@/components/home/Hero";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <SectionTitle title="サウナブログ" />
      <ArticleList />
      <div className="flex justify-center">
        <Button label="記事一覧へ" />
      </div>
    </>
  );
}
