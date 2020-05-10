import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from 'react-flip-move';
function ListItems(props) {
  const items = props.items;

   const listitems = items.map((item) => {
    return <div className="list" key={item.key}>
      <p>
        <input
         placeholder= " enter the text"
          type="text"
          value={item.text}
          id={item.key}
          onChange={(e) => {
            props.setUpdate(e.target.value, item.key);
          }}
        ></input>
        <span>
        
          <FontAwesomeIcon
            className="faicon"
            icon="trash"
            onClick={() => props.deleteItem(item.key)}
          ></FontAwesomeIcon>
          
        </span>
      </p>
    </div>
    
        });
      return(  <div>
        <FlipMove  duration={300} easing="ease-in-out" >
        {listitems}
        </FlipMove>
        </div>
      )
}

export default ListItems;
