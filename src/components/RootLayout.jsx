import React from "react";
import Header from "./Cart/Header";
import { Outlet } from "react-router-dom";
import Products from "./Shop/Products";
import Cart from "./Cart/Cart";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Cart />
      <Products />
    </>
  );
};

export default RootLayout;
