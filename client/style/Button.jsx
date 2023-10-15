import { styled } from "styled-components";

export const Button = styled.button`
  font-weight: 400;
  font-size: 1.7rem;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 40px;
  color: white;
  width: auto;
  background-color: #f64328;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(#f64328, 30%);
    transform: scale(0.96);
  }
  a {
    text-decoration: none;
    color: rgb(255 255 255);
  }
`;
