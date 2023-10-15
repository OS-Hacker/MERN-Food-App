import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 1.7rem;
}

html {
  /* 1rem = 10px */
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

p{
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  color: gray;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Roboto', sans-serif;
}

 h1 {
  font-size: 6rem;
  font-weight: bolder;
  white-space: normal;
 }

 h2 {
   font-size: 4rem;
   font-weight: 600;
  }

  h3 {
  font-size: 3rem;
  font-weight: 600;
  }

  h4 {
  font-size: 2rem;
  font-weight: 600;
  }

  h5 {
  font-size: 1.8rem;
  font-weight: 600;
  }

a {
  text-decoration: none;
}

li {
  list-style: none;
}

@media (max-width: 700px) {
   font-size: 50%;
}
@media (max-width: 998px) {
   font-size: 55%;
}


`;
