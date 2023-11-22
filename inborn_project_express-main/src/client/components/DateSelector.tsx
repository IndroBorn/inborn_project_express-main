import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newValue:any) => {
    setSelectedDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DateTimePicker
          label="Basic date time picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
    </LocalizationProvider>
  );
}