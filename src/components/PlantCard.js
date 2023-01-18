import React, {useState} from "react";

function PlantCard({plant}) {
  const [isPlantInStock, setIsPlantInStock] = useState(true)
  
  const handleSoldOutClick = () => {
    setIsPlantInStock(!isPlantInStock)
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
    </li>
  );
}

export default PlantCard;
