import React from "react";

export const FishCard = ({ fish }) => {
  return (
    <div key={fish.id} class="fishcard">
      <h1>{fish.name}</h1>
      <p>{fish.color}</p>
    </div>
  );
};
