import React, { Component } from "react"

import Header from "../Header"
import ListOfFoods from "../ListOfFoods"
import FavoriteFoods from "../FavoriteFoods"
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <ListOfFoods />
          <FavoriteFoods />
        </section>
      </div>
    )
  }
}

export default App
