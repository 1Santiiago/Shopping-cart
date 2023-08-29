import React from "react";
import * as c from "./style";
import { AiOutlineCloseCircle, AiFillCloseSquare } from "react-icons/ai";

function SideBar({
  isOpen,
  toggleSideBar,
  selectedProduct,
  cart,
  removeFromCart,
}) {
  return (
    <c.SideBar isOpen={isOpen}>
      <c.CloseButton onClick={toggleSideBar}>
        <AiOutlineCloseCircle />
      </c.CloseButton>
      <c.Container>
        {selectedProduct ? (
          <c.Container>
            <p>{selectedProduct.title}</p>
            <p>{selectedProduct.value}</p>
          </c.Container>
        ) : (
          <c.Container>
            <c.P textAlign={"center"}>Carrinho:</c.P>
            {cart.map((item) => (
              <c.CartItem key={item.id}>
                <c.P>{item.title}</c.P>
                <c.P>{`R$ ${item.price}`}</c.P>
                <c.RemoveButton>
                  <AiFillCloseSquare
                    onClick={() => removeFromCart(item.cartId)}
                  />
                </c.RemoveButton>
              </c.CartItem>
            ))}
          </c.Container>
        )}
      </c.Container>
    </c.SideBar>
  );
}

export default SideBar;
