import { useContext, useEffect, useState } from 'react';
import { MyContext } from '@/App';
import { usePagination } from '@/hooks/usePagination';
import { GO_TO_PAGINATION } from '@/constants/config';
import { PaginatorButton } from '@/components';

import styles from './paginator.module.css';

export const Paginator = () => {
  const [page, setPage] = useState<number | null>(null);
  const {
    handleBikesData,
    handleFetchingData,
    cleanErrorState,
    handleErrorRequest,
    isFetchingByFilters,
  } = useContext(MyContext);
  usePagination({
    page,
    handleBikesData,
    handleFetchingData,
    cleanErrorState,
    handleErrorRequest,
  });

  useEffect(() => {
    if (isFetchingByFilters) {
      setPage(null);
    }
  }, [isFetchingByFilters]);

  return (
    <section className={styles.paginator}>
      <PaginatorButton
        handlePage={() => {
          if (!page || page !== 1) setPage(1);
        }}
        buttonTitle={GO_TO_PAGINATION.first}
        isActiveButton={false}
      />
      <PaginatorButton
        handlePage={() => {
          if (page && page !== 1) setPage(page - 1);
        }}
        buttonTitle={GO_TO_PAGINATION.prev}
        isActiveButton={false}
      />
      <PaginatorButton
        handlePage={() => setPage(1)}
        buttonTitle={GO_TO_PAGINATION.one}
        isActiveButton={!page || page === 1}
      />
      <PaginatorButton
        handlePage={() => setPage(2)}
        buttonTitle={GO_TO_PAGINATION.two}
        isActiveButton={page === 2}
      />
      <PaginatorButton
        handlePage={() => setPage(3)}
        buttonTitle={GO_TO_PAGINATION.three}
        isActiveButton={page === 3}
      />
      <PaginatorButton
        handlePage={() => {
          if (page && page !== 3) setPage(page + 1);
        }}
        buttonTitle={GO_TO_PAGINATION.next}
        isActiveButton={false}
      />
      <PaginatorButton
        handlePage={() => {
          if (!page || page !== 3) setPage(3);
        }}
        buttonTitle={GO_TO_PAGINATION.last}
        isActiveButton={false}
      />
    </section>
  );
};
