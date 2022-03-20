import { Header } from '@/components';
import { ILayoutProps } from '@/interfaces/bikes.interface';

import styles from './layout.module.css';

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <section className={styles.layout}>
      <Header />
      {children}
    </section>
  );
};
