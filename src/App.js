import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://641f19f3ad55ae01ccb6753a.mockapi.io/items")
      .then((response) => response.json())
      .then((result) => setItems(result));
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>Zdarova Zayebal</h1>
      <Categories />
      <Sort />
      {items.map((pizza) => (
        <PizzaBlock key={pizza.id} {...pizza} />
      ))}
    </div>
  );
}

export default App;
