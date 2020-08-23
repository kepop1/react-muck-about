import React, { useContext } from "react";
import AppContext from "../AppContext";

const Checkout = () => {
  const { checkout } = useContext(AppContext);

  return (
    <div>
      {checkout.map((checkoutItem) => {
        return <div>{checkoutItem.price}</div>;
      })}
    </div>
  );
};

export default Checkout;
