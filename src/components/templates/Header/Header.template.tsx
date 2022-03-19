import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <p>Logo</p>
      <div className={styles.header__descriptionBox}>
        <h1>Police Department of Berlin</h1>
        <h1>Stolen bykes</h1>
      </div>
    </header>
  );
};
