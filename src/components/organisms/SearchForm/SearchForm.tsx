import { useState, useContext } from 'react';
import { DatePickerMemo as CustomDatePicker } from '../CustomDatePicker';
import { fetchAPI } from '@/services/api.search.service';
import { MyContext } from '@/App';

import styles from './searchForm.module.css';

export const SearchForm = () => {
  const {
    handleBikesData,
    handleFetchingData,
    cleanErrorState,
    handleErrorRequest,
  } = useContext(MyContext);
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearchBikes = () => {
    if (handleFetchingData && cleanErrorState) {
      handleFetchingData();
      cleanErrorState();
    }
    fetchAPI({ startDate, endDate, description })
      .then((response) => {
        if (handleBikesData && handleFetchingData) {
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
  };

  return (
    <form className={styles.searchForm}>
      <div className={styles.searchForm__descriptionBox}>
        <label htmlFor="description"></label>
        <input
          type="text"
          placeholder="Seacrh case descriptions"
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          className={styles.searchForm__descriptionField}
          value={description}
        />
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
