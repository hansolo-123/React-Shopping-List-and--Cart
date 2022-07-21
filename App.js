import React, { Component, useState } from "react";
import { Item, Item2 } from "./components/Item";
import itemData from "./components/itemData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: "1", name: "Red bull", amount: 1 },
        { id: "2", name: "Cigarettes", amount: 1 },
        { id: "3", name: "Coke-zero", amount: 1 },
        { id: "4", name: "Dog food", amount: 1 },
        { id: "5", name: "Cat food", amount: 1 },
      ],
      shoppingList: [],
    };
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(item) {
    console.log(`Clicked ${item.id}: ${item.name}`);
    if (this.state.shoppingList.includes(item)) {
      const id = item.id
      const idx = this.state.shoppingList.findIndex(
        (groceries) => groceries.id === id
      );
      const groceries = [...this.state.groceryItems];
      groceries[idx] = { ...groceries[idx], amount: groceries[idx].amount++ };
      return (
        this.setState(groceries) +
        console.log(
          `item already in shoppinglist, quantity now is: ${item.amount}`
        )
      );
    } else
      this.setState((prevState) => {
        const newshoppingList = [...prevState.shoppingList];
        newshoppingList.push(item);
        const newState = { ...prevState, shoppingList: newshoppingList };
        console.log(newState);
        return newState;
      });
  }

  render() {
    return (
      <main>
        <div className="groceryItem">
        <h3>Grocery list</h3>
          <ul>
            {this.state.groceryItems.map((item) => (
              <Item
                key={item.id}
                item={item}
                clickItem={() => this.onItemClick(item)}
              />
            ))}
          </ul>
        </div>
        <div className="shoppingList"></div>
        <h3>Shopping list</h3>
        <ul>
          {this.state.shoppingList.map((item) => (
            <Item2 key={Math.random().toString(36).slice(2)} item={item} />
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
