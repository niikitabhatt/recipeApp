import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';

import Temp from './Component/Temp';

const App = ()=> {
  const APP_ID='8e7d7cc2'
  const APP_KEY='6a4e7c08d7146387f3e3b481f85a9b16'
  const [receipes, setReceipe] = useState([])
  const [search , setSearch] =  useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    console.log("use effect")
    getReceipe()
  }, [query]);

const getReceipe= ()=>  {
  axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  .then(response => {
    console.log('get receipe by promise', response)
    console.log("use state variable receipes")
    setReceipe(response.data.hits)
    console.log("after use state receipe = " , receipes)
    
  })
  .catch(e => console.log(e))
}
const changeInputHnadler =(e)=>{
setSearch(e.target.value)
}
const onSubmitHandler= (e) => {
  e.preventDefault()
setQuery(search)
setSearch('')
}
return (
<div className='App'> 
<p>Receipe App</p>
<form className="search-form" >
<input className="search-input" 
placeholder={"enter recipe"}
type="text" value={search} onChange={changeInputHnadler}></input>
<button className="search-button" type="submit" onClick={onSubmitHandler} >Submit</button>
</form>
<div className="recipe-content">
{
  receipes.map((receipe, index) => (
  <Temp key={index} title={receipe.recipe.label}
  ingredients={receipe.recipe.ingredients}
  calories={receipe.recipe.calories}
  image={receipe.recipe.image}></Temp>
  )
  )
}
</div>

</div>
);
}

export default App;

