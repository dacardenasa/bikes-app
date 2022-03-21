import { useEffect } from 'react';
import { IPagination } from '@/interfaces/bikes.interface';
import { fetchAPI } from '@/services/api.search.service';
import { LOCALSTORAGE_PROPERTIES, LOCATION_LIST } from '@/constants/config';

export const usePagination = ({
  page,
  handleBikesData,
  handleFetchingData,
  cleanErrorState,
  handleErrorRequest,
}: IPagination) => {
  useEffect(() => {
    if (page) {
      if (handleFetchingData) handleFetchingData(true);
      const description = localStorage.getItem(
        LOCALSTORAGE_PROPERTIES.description
      );
      fetchAPI({
        location: LOCATION_LIST.berlin,
        page,
        ...(description && { description }),
      })
        .then((response) => {
          if (cleanErrorState && handleFetchingData && handleBikesData) {
            cleanErrorState();
            handleFetchingData(false);
            handleBikesData(response);
          }
        })
        .catch((e) => {
          if (handleFetchingData && handleErrorRequest) {
            handleFetchingData(false);
            handleErrorRequest(e);
          }
        });
    }
  }, [page]);
};
