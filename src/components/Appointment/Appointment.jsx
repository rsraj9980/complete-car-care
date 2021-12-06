import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import Select from 'react-select';


export default function Appoinment({user , services, handleAddAppointment}) {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('10:00');
    const [selected, setSelected] = useState([]);
     const serviceOptions = services.map((service)=> <option value={service._id}> {service.name} </option>)


    function handleSubmit(e) {
        e.preventDefault();
        date.setHours(time.substr(0,2));
        date.setMinutes(time.substr(3,2));
        handleAddAppointment(date);
    }

    function handleChange(e){
        e.preventDefault();
    
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setSelected([{values: value}]);
    }

    return (
        <div className="appointmentMainDiv">
        <div className="appointmentDiv">
        <form onSubmit={handleSubmit}>
        <Calendar
                className = "react-calendar"
                value={date}
                onChange={setDate}
            />
            <TimePicker
                value={time}
                onChange={setTime}
                disableClock={true}
            />
            <Select options={serviceOptions}/>
            <select name="service" multiple={true} onChange={handleChange}>
                {serviceOptions}
            </select>
            <button type="submit">Set Appointment
            </button>
            </form>
        </div>
        </div>
    );
}