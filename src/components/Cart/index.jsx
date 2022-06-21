import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";

import "./Cart.scss";

const Cart = ({ state, onClick }) => {
  const cartRendrer = (item) => {
    return (
      <Link to={`/${item.id}`} className="cart" key={item.id} onClick={onClick}>
        <img
          className="cart_photo"
          src={`https://react-test-starwars.vercel.app/${item.image}`}
        ></img>
        <h2 className="cart_title">{item.name}</h2>
        <h4 className="cart_subTitle">{item.shortDescription}</h4>
        <Button className="cart_btn">{`Buy $${item.price}`}</Button>
      </Link>
    );
  };

  if (state?.data) {
    return state?.data?.map((item) => cartRendrer(item));
  }
  if (state?.data === undefined) {
    return state?.map((item) => cartRendrer(item));
  }
};
export default Cart;
