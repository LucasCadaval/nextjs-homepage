'use client';

import Link from 'next/link';
import styles from './components.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logoLink}>
          <h1>XYZ</h1>
        </Link>
        <Link href="/login" className={styles.loginButton}>
          Login
        </Link>
      </div>
    </header>
  );
}
  