import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const [searchText, setSearchText] = useState("")  
  
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

  const handleSearchInput = (e) => {
    setSearchText(e.target.value)
  }

  const filteredPlants = plantList.filter(plant => plant.name.toLowerCase().includes(searchText.toLowerCase()))
  
  const handleDeletePlant = (plantToDelete) => {
    const updatedPlantsList = filteredPlants.filter(plant => plant.id !== plantToDelete.id)
    setPlantList(updatedPlantsList)
  }

  return (
    <main>
      <NewPlantForm 
        handleSubmit={handleSubmit}
      />
      <Search 
        handleSearchInput={handleSearchInput}
        searchText={searchText}
      />
      <PlantList 
        plantList={filteredPlants}
        handleDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
