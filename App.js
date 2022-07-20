import React, { Component } from "react";
import Item from "./components/Item";
import itemData from "./components/itemData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: "1", name: "Redbull" },
        { id: "2", name: "Cigarettes" },
        { id: "3", name: "Coke-zero" },
        { id: "4", name: "Dog food" },
        { id: "5", name: "Cat food" },
      ],
    };
  }

onItemClick(item) {
console.log(`Clicked ${item.id}: ${item.name}`);
}


  render() {
  return (
      <div>
        <ul>
          {this.state.groceryItems.map((item) => (
            <Item 
             key={item.id}
             item={item} 
             clickItem = {() => this.onItemClick(item)}
             />
          ))}
        </ul>
      </div>
    );
  }
  
}

export default App;
