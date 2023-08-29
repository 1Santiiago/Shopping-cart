import React, { useState } from "react";
import Header from "../Header/Header";
import list from "../../data";
import Card from "../Card/Card";
import * as c from "./style";
import SideBar from "../SideBar/SideBar";

function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null)
  const itemFiltered = list.filter((item) =>
    item.title.toLocaleLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
   
  };

  const addToCart = (item) => {
    const updatedCart = [...cart, { ...item, cartId: Date.now() }];
    setCart(updatedCart);
    selectedProduct(item);
    toggleSidebar();
  }
  const removeFromCart = (cartId) => {
    const updatedCart = cart.filter((item) => item.cartId !== cartId);
    setCart(updatedCart);
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log('clicou')
  }
  
  const selectProduct = (product) => {
    setSelectedProduct(product)
    toggleSidebar()
  }

  return (
    <>
      <Header handleChange={handleChange} value={search} toggleSideBar={toggleSidebar} />
      <c.containerHome>
        {itemFiltered.length > 0 ? (
          itemFiltered.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              author={item.author}
              img={item.img}
              value={`R$ ${item.price}`}
              addToCart={()=>addToCart(item)}
              selectProduct={() => selectProduct(item)}
            />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </c.containerHome>
      <SideBar
  isOpen={isSidebarOpen}
  toggleSideBar={toggleSidebar}
  selectedProduct={selectedProduct}
  cart={cart}
  removeFromCart={removeFromCart}
/>
    </>
  );
}

export default Home;
