import React, { useState,useEffect} from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import * as servicesAPI from '../../utilities/services-api';


export default function ServicesListPage({services, setServices}) {

  useEffect(function() {
    async function getServices() {
      const services = await servicesAPI.getAll();
      console.log("Hello");
      setServices(services);
    }
    getServices();
  }, []);

  return (
    <div>
      {services.map((service) => <ServiceCard  service = {service}/>)}
    </div>
  );
}