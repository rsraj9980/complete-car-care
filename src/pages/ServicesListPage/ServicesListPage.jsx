import React, { useEffect} from 'react';
import * as servicesAPI from '../../utilities/services-api';


export default function ServicesListPage({services , setServices }) {
  useEffect(function() {
    async function getServices() {
      const services = await servicesAPI.getAll();
      console.log(services);
      setServices(services);
    }
    getServices();
  }, []);
  return (
    <div>
      {services.name}
    </div>
  );
}