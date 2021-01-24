import React from "react";
import { LocationCard } from "./LocationCard.js";
import { locations } from "../../data/data.js";

export const LocationList = () => {
  return (
    <div>
      <h2 className="section__title">Locations</h2>
      <div className="locationlist">
        {locations.map((location) => (
          <LocationCard location={location} key={location.id} />
        ))}
      </div>
    </div>
  );
};
