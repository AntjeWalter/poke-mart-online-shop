import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeadline>Poké Mart Online Shop</StyledHeadline>
    </>
  );
}

const StyledHeadline = styled.h1`
  font-family: "PokemonSolid";
  color: #ffcb05;
  text-shadow: -1px 0 #2a75bb, 0 1.5px #2a75bb, 1.5px 0 #2a75bb, 0 -1px #2a75bb;
  text-align: center;
`;
