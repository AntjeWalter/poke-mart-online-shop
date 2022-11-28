import { StyledList } from "../ShoppingItem/ShoppingItem";
import { StyledItemList } from "../../App";

export default function Cart({ arrayOfItems }) {
  return (
    <>
      <h2>Cart</h2>
      <StyledItemList>
        {arrayOfItems.map((cartItem) => (
          <StyledList key={cartItem.id}>
            <h2>{cartItem.name}</h2>
            <p>{cartItem.cost} ¥</p>
            <img
              src={cartItem.sprites?.default}
              alt="pokemart-item"
              width="70px"
              height="70px"
            ></img>
          </StyledList>
        ))}
      </StyledItemList>
      <hr></hr>
    </>
  );
}
