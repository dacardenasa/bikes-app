import { useContext } from 'react';
import { MyContext } from '@/App';
import { BikeCard, Spinner, ZeroResults } from '@/components';
import { SCREEN_TYPE } from '@/constants/config';

import styles from './bikesCases.module.css';

export const BikesCases = () => {
  const { bikesCases, isFetchingData, errorRequest } = useContext(MyContext);
  const hasContextBikesData = bikesCases && bikesCases.length > 0;
  return (
    <section className={styles.bikesCases}>
      {hasContextBikesData && bikesCases.length > 0 && (
        <p className={styles.bikesCases__counterLabel}>
          Total: {bikesCases.length}
        </p>
      )}
      {isFetchingData && <Spinner />}
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
