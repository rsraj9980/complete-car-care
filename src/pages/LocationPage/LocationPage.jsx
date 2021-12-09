import React from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import './LocationPage.css';
export default function Loaction({locations}) {

  return (
    <div className= "LocationBackgroundDiv">

      <h1>Locations</h1>
      <div className="LocationDiv">
        <img className="locationImg" src="https://media2.giphy.com/media/vVc0YEoaotNzBZePTG/giphy.gif?cid=6c09b9521gto150nxg33l98qlo39ewyyumkh1r8s1dk786xg&rid=giphy.gif&ct=s" />
        <ul>
          {locations.map((l, idx) => (
            <LocationCard location={l} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
}