import { useContext } from 'react';
import { MyContext } from '@/App';
import { BikeCard, Spinner, ZeroResults, Paginator } from '@/components';
import { SCREEN_TYPE, TOTAL_ITEMS } from '@/constants/config';

import styles from './bikesCases.module.css';

export const BikesCases = () => {
  const { bikesCases, isFetchingData, errorRequest } = useContext(MyContext);
  const hasContextBikesData = bikesCases && bikesCases.length > 0;
  return (
    <section className={styles.bikesCases}>
      {hasContextBikesData && (
        <p className={styles.bikesCases__counterLabel}>
          <span className={styles.bikesCases__totalLabel}>Total:</span>{' '}
          {TOTAL_ITEMS}
        </p>
      )}
      {isFetchingData && (
        <div className={styles.bikesCases__loaderBox}>
          <Spinner />
        </div>
      )}
      {!isFetchingData &&
        !errorRequest &&
        bikesCases &&
        bikesCases.length === 0 && (
          <ZeroResults title="No results" screenType={SCREEN_TYPE.emptyQuery} />
        )}
      {!isFetchingData && errorRequest && (
        <ZeroResults
          title="Ooops, something went wrong"
          screenType={SCREEN_TYPE.networkError}
        />
      )}
      {!isFetchingData && hasContextBikesData && (
        <div className={styles.bikesCases__bikesCardBox}>
          {bikesCases.map((data: any) => (
            <BikeCard key={data.id} bikeCase={data} />
          ))}
        </div>
      )}
      {hasContextBikesData && <Paginator />}
    </section>
  );
};
