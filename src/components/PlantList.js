import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {
  const plantCardsList = plantList.map(plant =>
    <PlantCard
      key={plant.id}
      plant={plant}
    />
    )
  
  
  return (
    <ul className="cards">{plantCardsList}</ul>
  );
}

export default PlantList;
