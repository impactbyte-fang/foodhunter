import React, { Component } from "react"

import Header from "./Header.js"
import ListOfFoods from "./ListOfFoods.js"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <ListOfFoods />
        </section>
      </div>
    )
  }
}

export default App
