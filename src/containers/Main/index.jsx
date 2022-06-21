import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetData } from "../../store/redux/space/actions";

import { Cart, Loading } from "../../components";

import Header from "../Header";

import "./Main.scss";

const Main = () => {
  const state = useSelector((state) => state);
  const [isLoad, setIsLoad] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetData());
  }, []);

  useEffect(() => {
    state?.data.map((item) => {
      if (item.image.length === 0) {
        setIsLoad(true);
      } else if (item.image.length !== 0) {
        setIsLoad(false);
      }
    });
  }, [state]);

  const mainRendrer = () => {
    return (
      <>
        <Header />
        <div className="main_text">
          <h1 className="title">Star Wars Figures</h1>
          <h3 className="sub_title">
            Find the latest products for the biggest fans of the iconic saga.
          </h3>
        </div>
        <div className="carts_container">
          <Cart state={state} />
        </div>
      </>
    );
  };
  return isLoad ? <Loading /> : mainRendrer();
};

export default Main;
