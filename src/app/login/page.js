import Form from '../components/Form';
import styles from './login.module.css';
import Header from '../components/Header';

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <header className={styles.headerContainer}>
        <Header />
      </header>
      <main className={styles.loginContainer}>
        <Form />
      </main>
    </div>
  );
} 