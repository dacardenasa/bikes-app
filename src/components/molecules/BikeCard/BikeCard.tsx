import { ReactComponent as BikeDefaultIcon } from '@/assets/SVGS/bike.icon.svg';
import { IBikeCardProps } from '@/interfaces/bikes.interface';

import styles from './bikeCard.module.css';

export const BikeCard = ({ bikeCase }: any) => {
  return (
    <section className={styles.bikeCard}>
      <div className={styles.bikeCard__pictureBox}>
        {bikeCase?.large_img ? (
          <img
            src={bikeCase?.large_img}
            alt={`picture ${bikeCase.manufacturer_name}`}
            width="100%"
            height="100%"
          />
        ) : (
          <BikeDefaultIcon width={100} height={100} />
        )}
      </div>
      <div className={styles.bikeCard__descriptionBox}>
        <p className={styles.bikeCard__title}>Stolen {bikeCase.title}</p>
        <p className={styles.bikeCard__label}>
          {bikeCase?.description ||
            `Registry without description about this case in the dataBase of the police of Berlin.`}
        </p>
        <p className={styles.bikeCard__label}>
          {`${bikeCase?.date_stolen} ` || `Registry without stolen date `}-{' '}
          {bikeCase?.stolen_location ?? ` Registry without stolen location.`}
        </p>
      </div>
    </section>
  );
};
