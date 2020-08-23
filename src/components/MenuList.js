import React, { useContext } from "react";
import { Row, Col, Button } from "antd";
import AppContext from "../AppContext";

const MenuList = ({ items = [] }) => {
  const { checkout, setCheckout } = useContext(AppContext);

  const onClick = (event) => {
    const id = event.currentTarget.id;
    const menuItem = items.find((item) => item.id === +id);

    setCheckout([...checkout, menuItem]);
  };

  return items.map((menuItem) => {
    return (
      <Row key={menuItem.id} style={{ marginBottom: 25, alignItems: "center" }}>
        <Col span={6}>
          <img
            style={{ height: 150, objectFit: "cover" }}
            alt={menuItem.title}
            src={menuItem.imgUrl}
          />
        </Col>
        <Col span={10}>
          <div>
            <h1>{menuItem.title}</h1>
            <h4>{menuItem.description}</h4>
          </div>
        </Col>
        <Col span={4}>
          <h1>£{menuItem.price}</h1>
        </Col>
        <Col span={4}>
          <Button
            id={menuItem.id}
            onClick={onClick}
            type="primary"
            size="large"
          >
            Add
          </Button>
        </Col>
      </Row>
    );
  });
};

export default MenuList;
