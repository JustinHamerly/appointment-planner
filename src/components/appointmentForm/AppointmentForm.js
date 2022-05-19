import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title</label>
      <input
        placeholder='Title'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name='title'
        id='titleInput'
      />
      <label htmlFor='date'>Date</label>
      <input
        placeholder='Date'
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        name='date'
        id='dateInput'
      />
      <label htmlFor='time'>Time</label>
      <input
        placeholder='Time'
        type='time'
        min={getTodayString()}
        value={time}
        onChange={(e) => setTime(e.target.value)}
        name='time'
        id='timeInput'
      />
      <ContactPicker contacts={contacts} onChange={(e) => setContact(e.target.value)} />
      <button type='submit'>Add Appointment</button>
    </form>
  );
};
