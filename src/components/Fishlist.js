import React from "react";
import { FishCard } from "./FishCard";

export const FishList = () => {
  const arrayOfFish = [
    { name: "nemo", id: 1, color: "blue" },
    { name: "dory", id: 2, color: "red" },
    { name: "sharky", id: 3, color: "yellow" },
  ];
  return (
    <>
      {arrayOfFish.map((fish) => (
        <FishCard fish={fish} />
      ))}
    </>
  );
};
