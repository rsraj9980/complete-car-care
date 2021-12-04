import './ServiceCard.css';
export default function ServiceCard({service}) {
    return(
        <div className="serviceCardDiv">
            <h2>
            {service.name}
            </h2>
            <p>
            {service.desc}
            </p>
        </div>
    );
}