import { useEffect, useState } from 'react';
import { IRootBike } from '@/interfaces/bikes.interface';
import { fetchAPI } from '@/services/api.search.service';
import { LOCALSTORAGE_PROPERTIES, LOCATION_LIST } from '@/constants/config';

interface IPagination {
  page?: number | null;
  handleBikesData?: (data: IRootBike[]) => void;
  handleFetchingData?: () => void;
  cleanErrorState?: () => void;
  handleErrorRequest?: (error: string) => void;
}

export const usePagination = ({
  page,
  handleBikesData,
  handleFetchingData,
  cleanErrorState,
  handleErrorRequest,
}: IPagination) => {
  useEffect(() => {
    if (page) {
      if (handleFetchingData) handleFetchingData();
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
            handleFetchingData();
            handleBikesData(response);
          }
        })
        .catch((e) => {
          if (handleFetchingData && handleErrorRequest) {
            handleFetchingData();
            handleErrorRequest(e);
          }
        });
    }
  }, [page]);
};
