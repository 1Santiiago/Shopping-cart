import styled from "styled-components";

export const Container =  styled.div`
margin: 20px;
padding: 10px;

`
export const P = styled.p`
font-size: 14px;
font-weight: bold;
`

export const Img = styled.img`
width: 100%;
max-width: 200px;
object-fit: cover;
aspect-ratio: 1/1;
`
export const GreenButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: darkgreen;
  }
`;