import React, { Component } from "react";
import "./App.css";
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };
  addTodo = (e) => {
    e.preventDefault();
    if(this.state.currentItem.text !== ''){
    this.setState({
      items: [...this.state.items, this.state.currentItem],
      currentItem: {
        items: "",
        key: "",
      },
    }, () => {console.log("items", this.state.items)});
  }
    console.log("current itmes", this.state.currentItem);
  };
  deleteItem= (key)=>{
     const filteredItem= this.state.items.filter(item=> item.key!== key)
     this.setState(
       {
         items: filteredItem
       }
     )
  }
  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.text=text
      }
    })

      this.setState({
        items: items
      })
  }
  render()  {
    return (
      <div className="App">
        <div>
        <p className="heading"> <h1>Todo list</h1> </p>
          <form className="todo-form" onSubmit={this.addTodo}>
            <input 
              type="text"
              placeholder={'enter text'}
              onChange={this.handleInput}
              value={this.state.currentItem.text || ""}
            ></input>
            <button type="submit">ADD</button>
          </form>
          </div>  
          <div className="listitem">
      <ListItems items={this.state.items} 
      setUpdate = {this.setUpdate}
      deleteItem={this.deleteItem}></ListItems>
      </div>
      </div>
    );
  }
}

export default App;
