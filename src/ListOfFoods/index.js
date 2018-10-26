import React, { Component } from "react"

import "./index.css"

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
      <table>
        <th>
          <td>Foods:</td>
        </th>
        {foods.map(food => {
          return (
            <tr>
              <td>{food}</td>
            </tr>
          )
        })}
      </table>
    )
  }
}

export default ListOfFoods
