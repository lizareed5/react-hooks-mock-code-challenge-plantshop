import React, {useState} from "react";

function PlantCard({plant, handleDeletePlant}) {
  const [isPlantInStock, setIsPlantInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState("")
  
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

  const handlePriceChangeInput = (e) => {
    setUpdatedPrice(e.target.value)
  }
  
  const handlePriceChangeSubmit = (e) => {
    e.preventDefault()
    const newPriceObj = {
      updatedPrice: plant.price
    }
    plant.price = newPriceObj

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
      <form onSubmit={handlePriceChangeSubmit}>
        <input 
            type="number" 
            name="editPrice" 
            step="0.01" 
            placeholder="Edit Price" 
            value={updatedPrice}
            onChange={handlePriceChangeInput}
          />
        <button
          type="submit"
          className="price"
        >submit edit price</button>
      </form>
      
    </li>
  );
}

export default PlantCard;
