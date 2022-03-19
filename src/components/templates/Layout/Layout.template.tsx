import { Header } from '../Header';

import styles from './layout.module.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <section className={styles.layout}>
      <Header />
      {props.children}
    </section>
  );
};
