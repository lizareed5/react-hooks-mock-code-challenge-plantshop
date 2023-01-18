import React, {useState} from "react";

function PlantCard({plant, handleDeletePlant}) {
  const [isPlantInStock, setIsPlantInStock] = useState(true)
  
  const handleSoldOutClick = () => {
    setIsPlantInStock(!isPlantInStock)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
      }
    )
    .then(plant => handleDeletePlant(plant))
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isPlantInStock ? (
        <button 
          className="primary" 
          onClick={handleSoldOutClick}
        >In Stock</button>
      ) : (
        <button
          onClick={handleSoldOutClick}
        >Out of Stock</button>
      )}
      <button
        className="delete"
        onClick={handleDeleteClick}
      >DELETE</button>
    </li>
  );
}

export default PlantCard;
