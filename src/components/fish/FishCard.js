import React from "react";
import "../../styles/fish.css";

export const FishCard = ({ fish }) => {
  return (
    <div className="fish card">
      <div>
        <img src={`./images/fish/${fish.img}`} alt={fish.name} />
      </div>
      <h1>{fish.name}</h1>
      <p>({fish.species})</p>
      <p>color: {fish.color}</p>
      <p>length: {fish.length} inches</p>
      <p>location: {fish.location}</p>
    </div>
  );
};
