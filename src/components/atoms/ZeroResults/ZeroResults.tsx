import { ReactComponent as NoResultsIcon } from '@/assets/SVGS/bikeMatch.icon.svg';

import styles from './zeroResults.module.css';

export const ZeroResults = () => {
  return (
    <div className={styles.zeroResults}>
      <NoResultsIcon width={400} height={400} />
      <p className={styles.zeroResults__noResultsLabel}>No results</p>
    </div>
  );
};
