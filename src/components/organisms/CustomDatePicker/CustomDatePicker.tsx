import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import { ICalendarData } from '@/interfaces/bikes.interface';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { ReactComponent as CalendarIcon } from '@/assets/SVGS/calendar.icon.svg';

import styles from './datePicker.module.css';
import { useToggle } from '@/hooks/useToggle';
import React from 'react';

const CustomDatePicker = ({ date, handleDate, title }: ICalendarData) => {
  const { isOpenComponent, toggleComponent } = useToggle();
  const handleChange = React.useCallback((date: Date) => {
    const parsedDate = format(date, 'yyyy-MM-dd');
    toggleComponent();
    handleDate(parsedDate);
  }, []);
  return (
    <div className={styles.customDatePicker__calendarBox}>
      <label htmlFor={title} />
      <input
        type="text"
        placeholder={title}
        id={title}
        className={styles.customDatePicker__dateField}
        value={date}
        readOnly
      />
      <CalendarIcon
        width={40}
        className={styles.customDatePicker__calendarIcon}
        onClick={toggleComponent}
      />
      {isOpenComponent && (
        <div className={styles.customDatePicker__datePickerBox}>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            onChange={handleChange}
            showYearDropdown
            yearDropdownItemNumber={15}
            scrollableYearDropdown
            inline
          />
        </div>
      )}
    </div>
  );
};

export const DatePickerMemo = React.memo(CustomDatePicker);
