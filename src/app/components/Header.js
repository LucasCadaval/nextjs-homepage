"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./components.module.css";

export default function Header({ selectedTopic, onSelectTopic }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (topic) => {
    onSelectTopic(topic);
    setDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logoLink}>
          <h1>BitNews</h1>
        </Link>

        <div className={styles.rightButtons}>
          <div className={styles.menuWrapper}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={styles.menuButton}
            >
              Menu
            </button>
            {dropdownOpen && (
              <div className={styles.dropdown}>
                <button onClick={() => handleSelect("programming")}>
                  Programming
                </button>
                <button onClick={() => handleSelect("bitcoin")}>Bitcoin</button>
                <button onClick={() => handleSelect("cooking")}>Cooking</button>
                <button onClick={() => handleSelect("cooking")}>Cooking</button>
              </div>
            )}
          </div>

          <Link href="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}