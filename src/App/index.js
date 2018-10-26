import React, { Component } from "react"

import Header from "../Header"
import ListOfFoods from "../ListOfFoods"
import FavoriteFoods from "../FavoriteFoods"

import "bootstrap/dist/css/bootstrap.min.css"
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
