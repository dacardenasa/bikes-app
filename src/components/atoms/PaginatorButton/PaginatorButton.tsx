import { IButton } from '@/interfaces/bikes.interface';

import styles from './paginatorButton.module.css';

export const PaginatorButton = ({
  handlePage,
  buttonTitle,
  isActiveButton,
}: IButton) => {
  return (
    <button
      className={
        isActiveButton
          ? styles['paginatorButton--active']
          : styles.paginatorButton
      }
      onClick={handlePage}
    >
      {buttonTitle}
    </button>
  );
};
