import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, handleDeletePlant}) {
  const plantCardsList = plantList.map(plant =>
    <PlantCard
      key={plant.id}
      plant={plant}
      handleDeletePlant={handleDeletePlant}
    />
    )
  
  
  return (
    <ul className="cards">{plantCardsList}</ul>
  );
}

export default PlantList;
