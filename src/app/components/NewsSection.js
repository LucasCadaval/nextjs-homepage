'use client';

import { useState } from 'react';
import styles from './NewsSection.module.css';

export default function NewsSection({ articles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!articles || articles.length === 0) return <p>No news available.</p>;

  const main = articles[0];
  const secondaryList = articles.slice(1); 

  const totalPages = Math.ceil(secondaryList.length / itemsPerPage);

  const paginatedItems = secondaryList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

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

      <div className={styles.secondaryList}>
        {paginatedItems.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryCard}
          >
            <div className={styles.cardImageContainer}>
              <img src={article.urlToImage} alt={article.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardText}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </a>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span className={styles.paginationText}>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
