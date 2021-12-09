import './MyAppointmentsCard.css';
export default function MyAppointmentsCard({user, myAppointment}) {
    let formattedDate = myAppointment.date.toLocaleString();
    formattedDate = formattedDate.substr(0 ,formattedDate.length - 14);
    return(
        <div>          
            {console.log(myAppointment)}
            {formattedDate}
        </div>
    );
}