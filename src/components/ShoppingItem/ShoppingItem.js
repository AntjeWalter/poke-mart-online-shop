import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ShoppingItem({ name, url, onAddItem }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data);
    }
    fetchInfo();
  }, [url]);

  return (
    <StyledList>
      <h2>{name}</h2>
      <p>{info.cost} ¥</p>
      <img
        src={info.sprites?.default}
        alt="pokemart-item"
        width="70px"
        height="70px"
      ></img>
      <button type="button" onClick={() => onAddItem(info)}>
        Add Item
      </button>
    </StyledList>
  );
}

export const StyledList = styled.section`
  border: 1px solid black;
  width: 200px;

  h2 {
    margin: 20px;
    display: block;
  }

  p {
    margin: 20px;
    font-size: 1.5rem;
  }

  img {
    image-rendering: pixelated;
    margin: 10px;
    display: block;
  }

  button {
    height: 30px;
    width: 100px;
    background-color: lightblue;
    border-radius: 3px;
    font-size: 1rem;
    margin: 20px;
  }

  button:hover {
    cursor: pointer;
  }
`;
