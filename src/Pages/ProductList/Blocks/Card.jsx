import React, { useState } from "react";
import { Card as CardComponent, Button } from "antd";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

const { Meta } = CardComponent;

export const Card = (props) => {
  const { item, addProduct, deleteProduct, inBag } = props;
  const [isFlipped, changeFlopped] = useState(false);
  const onChangeFlipped = () => {
    changeFlopped(!isFlipped);
  };

  const [isAdd, changeAddToBag] = useState("В корзину");
  const addToBag = () => {
    if (isAdd === "В корзину" && !inBag) {
      addProduct(item);
      changeAddToBag("Удалить из корзины");
    } else {
      changeAddToBag("В корзину");
      deleteProduct(item);
    }
  };
  
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardComponent
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt={item.title}
              src={item.image}
              style={{ minHeight: "320px" }}
            />
          }
          onClick={onChangeFlipped}
        >
          <Meta title={item.title} />
        </CardComponent>

        <CardComponent
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt={item.title}
              src={item.image}
              style={{ minHeight: "320px" }}
            />
          }
          onClick={onChangeFlipped}
        >
          <Meta title={item.price + " грн"} />
        </CardComponent>
      </ReactCardFlip>
      <Link to="/details">
        <Button type="link">Подробнее</Button>
      </Link>
      <Button onClick={addToBag} type="link">
        {isAdd}
      </Button>
    </div>
  );
};
