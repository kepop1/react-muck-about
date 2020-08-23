import React from "react";
import { Card as AntCard } from "antd";
import Button from "./Button";
import { EyeFilled } from "@ant-design/icons";

const { Meta } = AntCard;

const Card = ({ id, imgUrl, title, description }) => {
  return (
    <div style={{ margin: 25 }}>
      <AntCard
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            style={{ height: 150, objectFit: "cover" }}
            alt={`${title} - ${description}`}
            src={imgUrl}
          />
        }
      >
        <Meta title={title} description={description} />
        <Button btnText="View" id={id} icon={<EyeFilled />} />
      </AntCard>
    </div>
  );
};

export default Card;
