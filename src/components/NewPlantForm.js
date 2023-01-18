import React, {useState} from "react";

function NewPlantForm({handleSubmit}) {
  const [newPlantName, setNewPlantName] = useState("")
  const [newPlantImage, setNewPlantImage] = useState("")
  const [newPlantPrice, setNewPlantPrice] = useState("")
 
  const handleNameInput = (e) => {
    setNewPlantName(e.target.value)
  }

  const handleImageInput = (e) => {
    setNewPlantImage(e.target.value)
  }

  const handlePriceInput = (e) => {
    setNewPlantPrice(e.target.value)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={newPlantName}
          onChange={handleNameInput}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={newPlantImage} 
          onChange={handleImageInput}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={newPlantPrice}
          onChange={handlePriceInput}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
