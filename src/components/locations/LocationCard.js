import React from "react";

export const LocationCard = ({ location }) => {
  return (
    <div className="location card">
      <div>
        <img src={`./images/locations/${location.img}`} alt={location.name} />
      </div>
      <h1>{location.name}</h1>
    </div>
  );
};
