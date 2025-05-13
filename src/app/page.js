'use client';

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Header from "./components/Header";
import NewsSection from "./components/NewsSection";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("programming");

  useEffect(() => {
    async function fetchNews() {
      const apiKey = "304c10c7af58435186c359b04ce3b9e0";
      const apiUrl = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      const filtered = data.articles?.filter((article) => article.urlToImage) || [];
      setArticles(filtered);
    }

    fetchNews();
  }, [topic]);

  return (
    <div className={styles.page}>
      <header className={styles.headerContainer}>
        <Header selectedTopic={topic} onSelectTopic={setTopic} />
      </header>
      <main className={styles.main}>
        <NewsSection articles={articles} />
      </main>
    </div>
  );
}