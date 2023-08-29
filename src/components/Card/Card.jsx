import * as c from "./style";

function Card({ title, author, img, value, addToCart }) {
  return (
    <c.Container>
      <c.P>{title}</c.P>
      <c.P>{author}</c.P>
      <c.Img src={img} />
      <c.P>{value}</c.P>
      <c.GreenButton onClick={addToCart}>Add cart</c.GreenButton>
    </c.Container>
  );
}

export default Card;
