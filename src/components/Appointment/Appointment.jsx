import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';


export default function Appoinment({user , services, handleAddAppointment}) {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('10:00');
    const [selectedServices, setSelectedServices] = useState([]);
    const serviceOptions = services.map((service) => ({ value: `${service._id}` , label: `${service.name}`}));
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        date.setHours(time.substr(0,2));
        date.setMinutes(time.substr(3,2));
        handleAddAppointment(date, selectedServices);
        navigate('/appointments/myAppointments');
    }
    
    function handleChangeServices (e) {
        services.map(function (service) {
            if(service._id.includes(e.value)){
                setSelectedServices(service);
            }
        });
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
             <Select 
             options={serviceOptions} 
             onChange={handleChangeServices}
             name="Services"
             />
            <button type="submit">Set Appointment
            </button>
            </form>
        </div>
        </div>
    );
}