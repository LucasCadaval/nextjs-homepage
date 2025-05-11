import styles from './NewsSection.module.css';

export default function NewsSection({ articles }) {
  if (!articles || articles.length === 0) return <p>Sem notícias disponíveis.</p>;

  const main = articles[0];
  const secondary = articles.slice(1, 3); 

  return (
    <div className={styles.newsContainer}>
      <div className={styles.mainNews}>
        <a
          href={main.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.newsCard}
          style={{ backgroundImage: `url(${main.urlToImage})` }}
        >
          <div className={styles.newsContent}>
            <h2>{main.title}</h2>
            <p>{main.description}</p>
          </div>
        </a>
      </div>
      <div className={styles.secondaryNews}>
        {secondary.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.newsCard}
            style={{ backgroundImage: `url(${article.urlToImage})` }}
          >
            <div className={styles.newsContent}>
              <h2>{article.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
