import { FC } from 'react';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </section>
  );
};

export default Home;
