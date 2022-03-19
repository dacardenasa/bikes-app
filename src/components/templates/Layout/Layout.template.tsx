import { Header } from '../Header';

import styles from './layout.module.css';

export const Layout = ({ children }) => {
  return (
    <section className={styles.layout}>
      <Header />
      {children}
    </section>
  );
};
