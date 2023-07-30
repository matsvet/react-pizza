import React, { useState } from "react";

function Sort() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const list = ["популярности", "цене", "алфавиту"];

  function onClickListItem(i) {
    setActive(i);
    setOpen(false);
  }

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировать по:</b>
        <span onClick={() => setOpen(!open)}>{list[active]}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            <li>
              {list.map((name, i) => (
                <li
                  className={active === i ? "active" : ""}
                  key={name}
                  onClick={() => onClickListItem(i)}
                >
                  {name}
                </li>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
