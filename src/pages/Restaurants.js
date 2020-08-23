import React from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import data from "../restaurants";

const Restaurants = () => {
  const restaurants = data.restaurants;
  return (
    <div>
      <Header
        title="Just Ate III - Restaurant List"
        subtitle="Order your favourite food at the click of a button"
      />
      <CardList items={restaurants} />
    </div>
  );
};

export default Restaurants;
