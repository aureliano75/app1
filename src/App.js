import React, {useEffect, useState} from 'react';
import './App.css';


const App = ()=>{
    const APP_ID = "0f18e732";
    const APP_KEY= "80d5a28dbb060aa07afc8f8dacdc15c1";
  
  
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] =useState("");
  
    useEffect(()=>{
      getData();
    },[query]);
  
    const getData = async ()=>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } 
    
    const updateSearch = e =>{
      setSearch(e.target.value);
      console.log(search);
    }
  
    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
    }
    
    return(
    <div style={container}>
      <form onSubmit={getSearch} className="transparent">
        <input type="text" value={search} onChange={updateSearch} className="tenpxpad searchbar"></input>
        <button type="submit" className="tenpxpad searchbutton">Search</button>
      </form>
      <div className="flexcontainer">
      {recipes.map(recipe=>(
            <Recipe 
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
            
          ))} 
      </div>
     
      {/* <Container /> */}
  
    </div>
      
    );
  }

  const Recipe = ({title,calories,image,ingredients}) =>{
    return (
      <div className="recipe">
        <div className="recipewrapper">
          <h1>{title}</h1>
          <p>Calories: {parseInt(calories)}</p>
          <img src={image} alt=""></img>
          <ul>{ingredients.map((ingredient,i)=>(
          <li key={i}>{ingredient.text}</li>
          ))}</ul>
        </div>
       
      </div>
    );
  }

  
  const container = {
    // border:"1px solid black",
    width: "80%",
    margin: "auto"
  }
  export default App;