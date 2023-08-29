import styled from "styled-components";

export const SideBar = styled.aside`
  width: 300px;
  height: 100%;
  background-color: #98F059;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-300px')};
  transition: right 0.3s ease;
  padding: 20px;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.3);

`;
export const CloseButton = styled.button`
background-color: transparent;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
`

export const CartItem = styled.div`
 border: 1px solid black;
 margin-top: 10px;

`;

export const Container= styled.div`
width: 100%;

margin: 10px 0;
`
export const P = styled.p`
color: #888;
text-align: ${(props) => props.textAlign || 'left'};
`
export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ff5555;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;