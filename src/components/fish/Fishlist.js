import React from "react";
import { FishCard } from "./FishCard.js";
import { fishes } from "../../data/data.js";

export const FishList = () => {
  return (
    <div>
      <h2 className="section__title">Fish</h2>
      <div className="fishlist">
        {fishes.map((fish) => (
          <FishCard fish={fish} key={fish.id} />
        ))}
      </div>
    </div>
  );
};
