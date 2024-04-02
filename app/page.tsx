import styles from "./page.module.css";
import Header from '../components/Header';
import Subscribe from '../components/Subscribe';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Subscribe />
    </main>
  );
}
