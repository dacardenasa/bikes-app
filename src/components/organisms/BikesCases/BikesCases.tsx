import { useContext } from 'react';
import { MyContext } from '@/App';
import { BikeCard, Spinner, ZeroResults } from '@/components';
import { ReactComponent as NoResultsIcon } from '@/assets/SVGS/bikeMatch.icon.svg';

import styles from './bikesCases.module.css';

export const BikesCases = () => {
  const { bikesCases, isFetchingData } = useContext(MyContext);
  const hasContextBikesData = bikesCases && bikesCases.length > 0;
  return (
    <section className={styles.bikesCases}>
      {hasContextBikesData && bikesCases.length > 0 && (
        <p className={styles.bikesCases__counterLabel}>
          Total: {bikesCases.length}
        </p>
      )}
      {isFetchingData && <Spinner />}
      {!isFetchingData && bikesCases && bikesCases.length === 0 && (
        <ZeroResults />
      )}
      <div className={styles.bikesCases__bikesCardBox}>
        {!isFetchingData &&
          hasContextBikesData &&
          bikesCases.map((data: any) => (
            <BikeCard key={data.id} bikeCase={data} />
          ))}
      </div>
    </section>
  );
};
