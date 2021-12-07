import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import Select from 'react-select';


export default function Appoinment({user , services, handleAddAppointment}) {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('10:00');
    const [selectedServices, setSelectedServices] = useState([]);
    const serviceOptions = services.map((service) => ({ value: `${service._id}` , label: `${service.name}`}));

    
    function handleSubmit(e) {
        e.preventDefault();
        date.setHours(time.substr(0,2));
        date.setMinutes(time.substr(3,2));
        handleAddAppointment(date, selectedServices);
    }
    // var SelSer=[];
    
    function handleChangeServices (e) {
        services.map(function (service) {
            if(service._id.includes((e.map(e => e.value)))){
                setSelectedServices(service);
            }
        });
        // SelSer = e.map(ser => ser.value);
        // console.log(SelSer);    
        // services.map(function(ser){
        //     if(ser._id.isEqual(SelSer)){
        //         setSelectedServices(ser);
        //     }
        // });
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
             isMulti  
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