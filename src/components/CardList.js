import React from "react";
import Card from "./Card";

const CardList = ({ items }) => {
  return (
    <div style={container}>
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

const container = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  padding: 15,
};

export default CardList;
