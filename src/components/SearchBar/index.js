import { useState } from "react"
import { Input } from "antd"
import { Button } from "antd"

export function SearchBar ({allFoods, setAllFoods}) {
//     const [searchTerm,setSearchTerm] = useState("")

//         <input 
//         type = "text" 
//         placeholder="search" 
//         onChange={(e) => {
//             setSearchTerm(e.target.value);
//         }}
//         />
//         {allFoods.filter((val)=>{
//             if (searchTerm ===""){
//                 return val
//             }else if (val.name.toLowerCase().includes(searchTerm.ToLowerCase())) {
//                 return val
//             }
//         }).map((val,key)=>{
//             return (
//                 <div className="user" key={key}>
//                     <p>{val.name}</p>
//                 </div>
//             )
//         })}




// }

    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("")
    // SEARCHINPUT GUARDA O QUE RECEBER DO SEARCHVALUE , 

    const searchItems = (searchValue) => {
        // SEARCHITEMS(funcao do onchange) , E A FUNCAO QUE VAI RECEBER COMO PARAMETRO SEARCHVALUE
        if (searchInput !== '') {
        setSearchInput(searchValue)
        //SETSEARCHINPUT EH O USO DO USESTATE, PRA COLOCAR O INPUT USUARIO SALVO EM SEARCHINPUT
        allFoods.filter((item) => {
        // ARRAY.FILTER , ITEM EH O CURRENT ITEM            
            return (item).toLowerCase().includes(searchInput.toLowerCase())
            //RETORNA O CURRENT ITEM EM MINUSCULO QUE CONTENHA  NA LISTA , O QUE O USUARIO DIGITOU EM MINUSCULO
        })
        setFilteredResults(searchInput)
    }
        else{
            setFilteredResults(allFoods)
    }
}



    return (
        <form>
            <label htmlFor="input-search">Search:</label>
            <Input 
            name="search" 
            type="text" 
            // value = {searchInput.value}
            onChange={() => searchItems()}
            placeholder = "search"
            />
        </form>
    )
}