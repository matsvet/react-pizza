import React, { useState } from "react";

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ["тонкое", "традиционное"];

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title"> {title} </h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              className={activeType === typeId ? "active" : ""}
              key={typeId}
              onClick={() => setActiveType(typeId)}
            >
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              className={activeSize === i ? "active" : ""}
              key={size}
              onClick={() => setActiveSize(i)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} Р</div>
        <button className="button button--outline button--add">Добавить</button>
      </div>
    </div>
  );
}

export default PizzaBlock;
