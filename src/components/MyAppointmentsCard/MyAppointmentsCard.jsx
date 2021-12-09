import './MyAppointmentsCard.css';
export default function MyAppointmentsCard({myAppointment}) {
    return(
        <div>
            {myAppointment.date}
        </div>
    );
}