import { ReactComponent as NoResultsIcon } from '@/assets/SVGS/bikeMatch.icon.svg';
import { ReactComponent as NetworkErrorIcon } from '@/assets/SVGS/networkError.icon.svg';
import { IZeroResults } from '@/interfaces/bikes.interface';
import { SCREEN_TYPE } from '@/constants/config';

import styles from './zeroResults.module.css';

export const ZeroResults = ({ title, screenType }: IZeroResults) => {
  return (
    <div className={styles.zeroResults}>
      {screenType === SCREEN_TYPE.emptyQuery && (
        <NoResultsIcon width={400} height={400} />
      )}
      {screenType === SCREEN_TYPE.networkError && (
        <NetworkErrorIcon width={400} height={400} />
      )}
      <p className={styles.zeroResults__noResultsLabel}>{title}</p>
    </div>
  );
};
