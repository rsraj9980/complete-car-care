import React, { useEffect} from 'react';
import MyAppointmentsCard from '../../components/MyAppointmentsCard/MyAppointmentsCard';
import './MyAppointmentsPage.css';

export default function MyAppointmentsPage({myAppointments}) {

  return (
    <div className="serviceMainDiv">
        {myAppointments.map((myAppointment) => <MyAppointmentsCard myAppointment = {myAppointment}/>)}
    </div>
  );
}