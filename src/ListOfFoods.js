import React, { Component } from "react"

import "./ListOfFoods.css"

const foods = [
  "Martabak",
  "Somay & Batagor",
  "Nasi Uduk",
  "Mi Ayam",
  "Soto Betawi",
  "Ketoprak",
  "Domino's Pizza"
]

class ListOfFoods extends Component {
  render() {
    return (
      <ul>
        {foods.map(food => {
          return <li>{food}</li>
        })}
      </ul>
    )
  }
}

export default ListOfFoods
