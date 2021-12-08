import React from 'react';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './AppointmentPage.css';
import * as appointmentsAPI from '../../utilities/appointments-api';
import Appointment from '../../components/Appointment/Appointment';

export default function AppoinmentPage({user, services}) {
    const [appointments, setAppointments] = useState([]);


    async function handleAddAppointment(date, selectedServices) {
        const appointment = await appointmentsAPI.add(date,selectedServices);
        setAppointments([...appointments, appointment]);
    }

    return (
        <div className="appointmentMainDiv">
            <Appointment user={user} services={services} handleAddAppointment= {handleAddAppointment} />
        </div>
    );
}