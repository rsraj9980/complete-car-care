import React, { useEffect} from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './ServicesListPage.css';

export default function ServicesListPage({services}) {

  return (
    <div className="serviceMainDiv">
      {services.map((service, idx) => <ServiceCard  service = {service} key={idx}/>)}
    </div>
  );
}