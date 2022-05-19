import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const resetState = () => {
    setTitle('');
    setContact('');
    setDate('');
    setTime('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && contact && date && time){
      addAppointment(title, contact, date, time)
    }
    resetState();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
            contacts={contacts}
            title={title}
            setTitle={setTitle}
            setContact={setContact}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {
          appointments.length &&
          <TileList tileArray={appointments} />
        }
      </section>
    </div>
  );
};
