import React, { useContext } from "react";
import { Menu, Badge } from "antd";
import {
  HomeOutlined,
  ShoppingFilled,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";

const NavBar = () => {
  const { checkout } = useContext(AppContext);
  const checkoutCount = checkout.length;

  return (
    <Menu mode="horizontal">
      <Menu.Item key="restaurant" icon={<HomeOutlined />}>
        <Link to="/restaurants">Restaurants</Link>
      </Menu.Item>
      <Menu.Item key="checkout" icon={<ShoppingFilled />}>
        <Badge count={checkoutCount}>
          <Link to="/checkout">Checkout</Link>
        </Badge>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
