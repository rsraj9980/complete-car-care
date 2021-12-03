import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ServiceListPage from '../ServicesListPage/ServicesListPage';
import OrderHistoryPage from '../Location/Location';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import {locations} from '../../location.js';
import Location from '../Location/Location';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [services, setServices] = useState([]);
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/services" element={<ServiceListPage services={services} setServices={setServices}/>} />
            <Route path="/locations" element={<Location locations={locations}/>} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }

    </main>
  );
}
