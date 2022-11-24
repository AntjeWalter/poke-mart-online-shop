import { useEffect, useState } from "react";
import "./ShoppingItem.css";

export default function ShoppingItem({ name, url }) {
  const [info, setInfo] = useState({ img: "", name: "", cost: "" });

  console.log(info);

  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setInfo(data);
    }
    fetchInfo();
  }, [url]);

  return (
    <>
      <li className="items">
        {name} <br />
        {info.cost} <br />
        <img
          src={info.sprites?.default}
          alt="pokemart-item"
          width="100px"
          height="100px"
        ></img>
      </li>
    </>
  );
}
