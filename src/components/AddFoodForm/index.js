import { useState } from "react"
import { Input } from "antd"
import { Button } from "antd"

export function AddFoodForm ({allFoods,setAllFoods}) {
    const [form, setForm] = useState({
        name: "",
        image: "" ,
        calories: "",
        servings: "",
    });

    function handleChange (event) {
    setForm({ ...form, [event.target.name]:event.target.value});  
    // console.log (event.target.name)  
}

    function handleSubmit (event2) {
        event2.preventDefault()
        setAllFoods ([...allFoods , form])
    }

    return (
        <form>
            <label htmlFor="input-name">Nome:</label>
            <Input 
                id="input-name"
                type="text"
                value={form.name}
                name="name"
                onChange={handleChange}
            />

            <label htmlFor="input-image">Image:</label>
            <Input 
                id="input-image"
                type="text"
                value={form.image}
                name="image"
                onChange={handleChange}
            />

            <label htmlFor="input-calories">Calories:</label>
            <Input 
                id="input-calories"
                type="number"
                value={form.calories}
                name="calories"
                onChange={handleChange}
            />

            <label htmlFor="input-servings">Servings:</label>
            <Input 
                id="input-servings"
                type="number"
                value={form.servings}
                name="servings"
                onChange={handleChange}
            />
            <Button type="button" 
            onClick = {handleSubmit}
            >
            Create
            </Button>



        </form>
    )
}