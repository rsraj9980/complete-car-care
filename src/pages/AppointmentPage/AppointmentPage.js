import React from 'react';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import './AppointmentPage.css';


export default function AppoinmentPage({services, activeService, setActiveService}) {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('10:00');


    const service = services.map((service)=> <option value={service.name}> {service.name} </option>)
    return (
        <div className="appointmentMainDiv">
        <div className="appointmentDiv">
            <Calendar
                className = "react-calendar"
                onChange={setDate}
                value={date}
            />
            <TimePicker
                onChange={setTime}
                value={time}
            />

            <select name="service" multiple>
                {service}
            </select>
            <button>Set Appointment</button>
        </div>
        </div>
    );
}