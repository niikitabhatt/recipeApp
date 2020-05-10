import React from 'react';

const Temp=({title,calories,image, ingredients})=> {
   
    return (
        
        <div>
        <h1>{title}</h1>
      <ol>
      {
        ingredients.map(ingredient => <li> {ingredient.text}</li>)
       }
       </ol>
        <h2> {calories}</h2>
        <img src={image} arg=''></img>
        
        </div>
    )
}

export default Temp
