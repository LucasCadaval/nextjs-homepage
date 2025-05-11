import styles from "./page.module.css";
import Header from "./components/Header";
import NewsSection from './components/NewsSection';

async function getNews() {
  const apiKey = '304c10c7af58435186c359b04ce3b9e0';
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );
  const data = await res.json();

  // Filtrar apenas artigos com imagem
  const filtered = data.articles?.filter(article => article.urlToImage) || [];
  return filtered;
}

export default async function Home() {
  const articles = await getNews();

  return (
    <div className={styles.page}>
      <header className={styles.headerContainer}>
        <Header />
      </header>
      <main className={styles.main}>
        <NewsSection articles={articles} />
      </main>
    </div>
  );
}
