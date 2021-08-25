import { createGlobalStyle } from "styled-components";


export const GlobalStyle =createGlobalStyle `
body{
    font-family: 'Open Sans Condensed', sans-serif;
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
    padding: 20px 60px;
    font-weight: 200;
    background-color: #eeeeee;
    background-attachment: fixed;


    @media screen and (max-width:800px){
      padding:10px;
    }
}

a{
    text-decoration: none;
    color: black;
}

*{
    box-sizing: border-box;
}


`