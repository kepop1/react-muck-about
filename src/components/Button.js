import React from "react";
import { Link } from "react-router-dom";
import { Button as AntButton } from "antd";

const Button = ({ btnText, id, icon }) => {
  return (
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Link to={`restaurants/${id}`}>
        <AntButton type="primary" icon={icon} size="large">
          {btnText}
        </AntButton>
      </Link>
    </div>
  );
};

export default Button;
