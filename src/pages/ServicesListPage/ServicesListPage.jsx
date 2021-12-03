import React, { useState,useEffect} from 'react';
import * as servicesAPI from '../../utilities/services-api';


export default function ServicesListPage() {
  const [services, setServices] = useState([]);
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
      {}
    </div>
  );
}