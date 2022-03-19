import styles from './header.module.css';

import { ReactComponent as PoliceStationIcon } from '../../../assets/SVGS/policeStation.icon.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <PoliceStationIcon width={100} height={100} />
      <div className={styles.header__descriptionBox}>
        <p className={styles.header__title}>Police Department of Berlin</p>
        <p className={styles.header__subtitle}>Stolen bykes</p>
      </div>
    </header>
  );
};
