import ArticleList from "@/components/articles/ArticleList";
import Hero from "@/components/home/Hero";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <SectionTitle />
      <ArticleList />
    </>
  );
}
