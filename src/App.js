import foods from './foods.json';
import { Screen } from './components/Screen/index';
import { useState } from "react";
import { FoodBox } from "./components/FoodBox/index"
import { AddFoodForm } from "./components/AddFoodForm/index"
import { SearchBar } from "./components/SearchBar/index"

function App() {
  const [allFoods, setAllFoods] = useState(foods)
  console.log(allFoods)













  return (
    <div className="App">
    {/* ITERACAO 5 */}

    <SearchBar 
      allFoods={allFoods}
    />

        {/* ITERACAO 4 */}

  <AddFoodForm 
    allFoods={allFoods}
    setAllFoods = {setAllFoods}
   />

      {/* ITERACAO 1

  {allFoods.map((currentFood) =>{
    return (
      <Screen  
    foodName={currentFood.name}
    foodImage ={currentFood.image}
  />
    )
  })}



    {/* ITERACAO 2 */}

  {/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> */} 


    {/* ITERACAO 3 */}

  {allFoods.map((currentFoodBox)=> {
    console.log (currentFoodBox)
    return (
      <FoodBox 
      food ={currentFoodBox}
      />
    )
  })}











    </div>
  );
}

export default App;
