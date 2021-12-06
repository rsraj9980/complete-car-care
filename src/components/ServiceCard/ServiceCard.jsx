
import './ServiceCard.css';
export default function ServiceCard({service}) {
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {service.name}
                </div>
                <div className="flip-card-back">
                <h2>
                    {service.name}
                </h2>
                <p>
                    {service.desc}
                </p>
            </div>
        </div>
    </div>
    );
}