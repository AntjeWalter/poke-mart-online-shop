import { createGlobalStyle } from "styled-components";
import PokemonSolid from "./font/PokemonSolid.ttf";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

@font-face {
    font-family: "PokemonSolid";
    src: local("PokemonSolid"),
    url(${PokemonSolid}) format("truetype");
}
`;

export default GlobalStyle;
