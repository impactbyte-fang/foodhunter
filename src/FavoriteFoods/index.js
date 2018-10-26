import React from "react"

const favorites = [
  {
    name: "Haidar",
    foods: ["Martabak Asin", "Martabak Manis", "Rotiboy"]
  },
  {
    name: "Adam",
    foods: ["Kebab", "Daun Kedondong"]
  },
  {
    name: "Domingos",
    foods: ["Ayam Bakar", "Domino's Pizza"]
  },
  {
    name: "Jemika",
    foods: ["Kentang Goreng", "Telor Rebus"]
  },
  {
    name: "Albert",
    foods: ["React", "Redux"]
  },
  {
    name: "Iqbal",
    foods: ["Tahu", "Tempe"]
  },
  {
    name: "Muhsin",
    foods: ["Kerupuk", "Soto"]
  },
  {
    name: "Wippy",
    foods: ["Hati", "Jantung"]
  }
]

const FavoriteFoods = () => (
  <div>
    {favorites.map(favorite => (
      <div>
        <h3>{favorite.name}</h3>
        <ol>
          {favorite.foods.map(food => (
            <li>{food}</li>
          ))}
        </ol>
      </div>
    ))}
  </div>
)

export default FavoriteFoods
