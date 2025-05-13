'use client';

import { useState } from 'react';
import styles from './components.module.css';

export default function Form() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>{isLogin ? 'Login' : 'Register'}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {!isLogin && (
          <div className={styles.formGroup}>
            <label htmlFor="nome" className={styles.label}>Name:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className={styles.input}
              required={!isLogin}
            />
          </div>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="senha" className={styles.label}>Password:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            className={styles.input}
            required
          />
        </div>
        {!isLogin && (
          <div className={styles.formGroup}>
            <label htmlFor="confirmarSenha" className={styles.label}>Confirm password:</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              className={styles.input}
              required={!isLogin}
            />
          </div>
        )}
        <button type="submit" className={styles.button}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <div className={styles.toggleForm}>
        <button
          className={styles.toggleButton}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Don't have an account? Register" : "Alredy has an account? Login"}
        </button>
      </div>
    </div>
  );
}
  