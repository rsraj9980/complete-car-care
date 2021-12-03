import React from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
export default function Loaction({locations}) {

  return (
    <div>
      <h1>Locations</h1>
      {locations.map((l) => (
        <LocationCard location={l} />
      ))}
    </div>
    
  );
}