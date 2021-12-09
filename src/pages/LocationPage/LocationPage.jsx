import React from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import './LocationPage.css';
export default function Loaction({locations}) {

  return (
    <div className= "LocationBackgroundDiv">
      <h1>Locations</h1>
      <ul>
      {locations.map((l, idx) => (
        <LocationCard location={l} key={idx} />
      ))}
      </ul>
    </div>
  );
}