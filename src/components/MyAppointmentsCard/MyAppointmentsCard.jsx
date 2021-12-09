import './MyAppointmentsCard.css';
export default function MyAppointmentsCard({user, myAppointment}) {
    let formattedDate = myAppointment.date.toLocaleString();
    formattedDate = formattedDate.substr(0 ,formattedDate.length - 14);
    const service = myAppointment.services;

    let formattedTime = myAppointment.date.toLocaleString();
    formattedTime = formattedTime.substr(11 ,formattedDate.length - 5);
    return(
        <div className="Card">  
            <h3>
                Name:- {user.name}
            </h3>
            <p>
                Date:- {formattedDate}  
            </p>
            <p>
                Time:- {formattedTime}
            </p>
            <p>
                Service Slected:- {service.map(m=>m.name)}   
            </p>
        </div>
    );
}