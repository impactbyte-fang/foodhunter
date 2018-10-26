import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import ListOfFoods from "./ListOfFoods.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>FoodHunter</h1>
          <ol>
            <ListOfFoods />
          </ol>
        </header>
      </div>
    )
  }
}

export default App
