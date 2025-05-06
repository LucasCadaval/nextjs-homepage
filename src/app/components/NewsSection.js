import styles from './NewsSection.module.css';

export default function NewsSection() {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.mainNews}>
        <div className={styles.newsCard} style={{ backgroundImage: "url('/gta6.png')" }}>
          <div className={styles.newsContent}>
            <h2>'GTA 6' ganha novo trailer com cenas inéditas</h2>
            <p>Rockstar divulgou também detalhes dos personagens do jogo que chega em maio de 2026.</p>
          </div>
        </div>
      </div>
      <div className={styles.secondaryNews}>
        <div className={styles.newsCard} style={{ backgroundImage: "url('/davyjones.png')" }}>
          <div className={styles.newsContent}>
            <h2>Youtuber Davy Jones sofre infarto e é hospitalizado após receber a notícia de que 'GTA 6' foi adiado para 2026.</h2>
          </div>
        </div>
        <div className={styles.newsCard} style={{ backgroundImage: "url('/OOOO.jpg')" }}>
          <div className={styles.newsContent}>
            <h2>Youtuber Davy Jones foge do hospital após receber a notícia de que foi lançado novo trailer de 'GTA 6'</h2>
          </div>
        </div>
      </div>
    </div>
  );
} 