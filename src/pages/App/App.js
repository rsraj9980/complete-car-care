import React, { useState , useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ServiceListPage from '../ServicesListPage/ServicesListPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import {locations} from '../../location.js';
import LocationPage from '../LocationPage/LocationPage';
import AppoinmentPage from '../AppointmentPage/AppointmentPage';
import * as servicesAPI from '../../utilities/services-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [services, setServices] = useState([]);

  useEffect(function() {
    async function getServices() {
      const services = await servicesAPI.getAll();
      setServices(services);
    }
    getServices();
  }, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/services" element={<ServiceListPage services={services} />} />
            <Route path="/locations" element={<LocationPage locations={locations}/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/appointments" element={<AppoinmentPage user={user} services={services}/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }

    </main>
  );
}
