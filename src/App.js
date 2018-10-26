import React, { Component } from "react"

import ListOfFoods from "./ListOfFoods.js"

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>FoodHunter</h1>
        </header>
        <section>
          <ListOfFoods />
        </section>
      </div>
    )
  }
}

export default App
