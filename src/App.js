import React, {useState, useEffect} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Receipe from "./components/Recipes";
import axios from 'axios';

function App() {
  const [search, setSearch]= useState("")
  const [recipes, setRecipes]= useState([]);
  const APP_ID = "7688ac31";
  const APP_KEY = "e2867f1495fb37610ed73a838926f4ba";

useEffect( ()=>{
 getRecipes()
}, [])

const getRecipes= async() =>{
  const result = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  console.log(result.data.hits);
  setRecipes(result.data.hits)
}

  const onInputChange = (e) =>{
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const onSearchClick = () =>{
    getRecipes()
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
      <Receipe recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
