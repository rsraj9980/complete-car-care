import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import '../../pages/AppointmentPage/AppointmentPage.css';


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
        <form className="appointmentDiv" onSubmit={handleSubmit}>
        
        <Calendar
                className = "react-calendar"
                value={date}
                onChange={setDate}
            />
            <p>
            <TimePicker
                value={time}
                onChange={setTime}
                disableClock={true}
            />
            <br />
             <Select 
             options={serviceOptions} 
             onChange={handleChangeServices}
             name="Services"
             />
             <br />
            <button className="btn" type="submit">Set Appointment
            </button>
            </p>
            </form>
        </div>
    );
}