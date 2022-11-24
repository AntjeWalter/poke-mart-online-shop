import "./App.css";
import Header from "./components/Header/Header";
import ShoppingItem from "./components/ShoppingItem/ShoppingItem";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch("https://pokeapi.co/api/v2/item/");
      const data = await response.json();
      setItems(data.results);
      console.log(data.results);
    }

    startFetching();
  }, []);

  return (
    <>
      <Header />
      <ul>
        {items.map((item) => (
          <ShoppingItem name={item.name} key={item.name}>
            {item.name}
          </ShoppingItem>
        ))}
      </ul>
    </>
  );
}

export default App;
