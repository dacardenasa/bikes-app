import { useState, useContext } from 'react';
import { DatePickerMemo as CustomDatePicker } from '../CustomDatePicker';
import { fetchAPI } from '@/services/api.search.service';
import { LOCALSTORAGE_PROPERTIES, LOCATION_LIST } from '@/constants/config';
import { MyContext } from '@/App';

import { ReactComponent as CloseIcon } from '@/assets/SVGS/close.icon.svg';

import styles from './searchForm.module.css';

export const SearchForm = () => {
  const {
    handleBikesData,
    handleFetchingData,
    cleanErrorState,
    handleErrorRequest,
    handleFetchingFilters,
  } = useContext(MyContext);
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearchBikes = () => {
    if (
      handleFetchingData &&
      cleanErrorState &&
      handleFetchingFilters &&
      handleBikesData
    ) {
      handleBikesData([]);
      handleFetchingData(true);
      cleanErrorState();
      handleFetchingFilters();
    }
    fetchAPI({
      startDate,
      endDate,
      description,
      location: LOCATION_LIST.berlin,
    })
      .then((response) => {
        if (handleBikesData && handleFetchingData && handleFetchingFilters) {
          handleFetchingData(false);
          handleBikesData(response);
          handleFetchingFilters();
        }
      })
      .catch((e) => {
        if (handleFetchingData && handleErrorRequest && handleFetchingFilters) {
          handleFetchingData(false);
          handleErrorRequest(e);
          handleFetchingFilters();
        }
      });
  };

  return (
    <form className={styles.searchForm}>
      <div className={styles.searchForm__descriptionBox}>
        <label htmlFor="description"></label>
        <input
          type="text"
          placeholder="Seacrh case descriptions"
          onChange={(e) => {
            setDescription(e.target.value);
            localStorage.setItem(
              LOCALSTORAGE_PROPERTIES.description,
              e.target.value
            );
          }}
          id="description"
          className={styles.searchForm__descriptionField}
          value={
            description ||
            localStorage.getItem(LOCALSTORAGE_PROPERTIES.description) ||
            ''
          }
        />
        {localStorage.getItem(LOCALSTORAGE_PROPERTIES.description) ||
        description.length ? (
          <CloseIcon
            width={25}
            height={25}
            onClick={() => {
              localStorage.removeItem(LOCALSTORAGE_PROPERTIES.description);
              setDescription('');
            }}
          />
        ) : null}
      </div>
      {/* Calendar */}
      <div className={styles.searchForm__pickerBox}>
        <CustomDatePicker
          title="from"
          date={startDate}
          handleDate={(startDate: string) => {
            setStartDate(startDate);
          }}
        />
      </div>
      <div className={styles.searchForm__pickerBox}>
        <CustomDatePicker
          title="to"
          date={endDate}
          handleDate={(endDate: string) => {
            setEndDate(endDate);
          }}
        />
      </div>
      <button
        onClick={handleSearchBikes}
        className={styles.searchForm__button}
        type="button"
      >
        Find Cases
      </button>
    </form>
  );
};
