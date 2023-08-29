import styled from "styled-components";

export const MasterContainer = styled.div`
  background-color: green;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 2rem;
  align-items: center;
`;

export const WrapperInput = styled.div`
display: flex;


`

export const P = styled.p`
font-size: ${props => props.fontSize || '16px'};
  color: ${props => props.color || 'black'};
  margin-right: 10px;
  text-transform: uppercase;

`

export const Input = styled.input`
padding-left: 10px;
outline: 0;
border: 0;
border-radius: 5px;
color: green;

&&::placeholder{
  color: green;
  
}
`