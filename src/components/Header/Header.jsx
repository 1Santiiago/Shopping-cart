import React from "react";
import * as c from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Header({ handleChange, search, toggleSideBar }) {
  return (
    <c.MasterContainer>
      <c.WrapperInput>
        <c.P color="white">BookStore</c.P>
        <c.Input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={search}
        />
      </c.WrapperInput>
      <AiOutlineShoppingCart
        onClick={toggleSideBar}
        style={{ cursor: "pointer" }}
      />
    </c.MasterContainer>
  );
}

export default Header;
