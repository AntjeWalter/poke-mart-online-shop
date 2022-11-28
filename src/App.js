import "./App.css";
import Header from "./components/Header/Header";
import ShoppingItem from "./components/ShoppingItem/ShoppingItem";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  //const [addedToCart, setAddedToCart] = useState(false);

  console.log(cart);
  console.log(items);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch("https://pokeapi.co/api/v2/item/");
      const data = await response.json();
      setItems(data.results);
    }

    startFetching();
  }, []);

  function handleAddItem(info) {
    setCart([...cart, info]);
  }

  return (
    <>
      <Header />
      <Cart arrayOfItems={cart}></Cart>
      <StyledItemList>
        {items.map((item) => (
          <ShoppingItem
            name={item.name}
            key={item.name}
            url={item.url}
            onAddItem={handleAddItem}
          >
            {item.name}
          </ShoppingItem>
        ))}
      </StyledItemList>
    </>
  );
}

export const StyledItemList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  justify-content: center;
  grid-gap: 1em;
`;

export default App;
