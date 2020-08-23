import React from "react";
import { useParams } from "react-router-dom";
import data from "../restaurants";
import MenuList from "../components/MenuList";

const Restaurant = () => {
  const { id } = useParams();

  const selectedRestaurant = data.restaurants.find(
    (restaurant) => restaurant.id === +id
  );

  return (
    <div style={{ padding: 15 }}>
      <h1>{selectedRestaurant.title} Menu</h1>

      <MenuList items={selectedRestaurant.menu} />
    </div>
  );
};

export default Restaurant;
