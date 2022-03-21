import styles from './spinner.module.css';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner__loader} />
      <p className={styles.spinner__loaderLabel}>Loading bikes cases...</p>
    </div>
  );
};
