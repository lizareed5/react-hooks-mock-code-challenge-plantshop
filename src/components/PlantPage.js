import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlantList(data))
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlantObj = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value
    }
    console.log(newPlantObj)
    handleNewPlantPost(newPlantObj)
  }
  
  const handleNewPlantPost = (newPlantObj) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json",
      },
      body: JSON.stringify(newPlantObj)
    })
    .then(response => response.json())
    .then(returnData => setPlantList([...plantList, returnData])
    )
  }
  return (
    <main>
      <NewPlantForm 
        handleSubmit={handleSubmit}
      />
      <Search />
      <PlantList 
        plantList={plantList}
      />
    </main>
  );
}

export default PlantPage;
