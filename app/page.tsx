import ArticleItemList from "@/components/ArticleListItem";
import { getSortedArticles } from "@/lib/articles";

const HomePage = () => {
  const articles = getSortedArticles();

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
        <h1>minimal blog</h1>
      </header>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles}
              key={article}
            />
          ))}
      </section>
    </section>
  );
};

export default HomePage;
