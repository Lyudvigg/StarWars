import React, { useEffect, useState } from "react";
import { AboutBack, GetDataById } from "../../store/redux/space/actions";
import { Input, Button, Cart, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Header } from "../../containers";

import "react-toastify/dist/ReactToastify.css";

import "./AboutCart.scss";

const AboutCart = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [isLoad, setIsLoad] = useState(true);

  const relatedProductsList = useSelector((state) => state?.relatedProduct);
  const productList = useSelector((state) => state?.product);

  const notify = () => toast.success("Wow so easy!");

  useEffect(() => {
    dispatch(GetDataById(params.id));
  }, [params.id]);

  useEffect(() => {
    if (
      relatedProductsList.length === 0 ||
      Object.keys(productList).length === 0
    ) {
      setIsLoad(true);
    } else if (
      relatedProductsList.length !== 0 ||
      Object.keys(productList).length !== 0
    ) {
      setIsLoad(false);
    }
  }, [relatedProductsList, productList]);

  const aboutCartPhotoRendrer = () => {
    if (productList.image !== undefined) {
      return (
        <div className="aboutCart_avatar">
          <img
            src={`https://react-test-starwars.vercel.app/${productList?.image}`}
            alt="photo"
          />
        </div>
      );
    }
  };

  const aboutBack = () => {
    dispatch(AboutBack());
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    aboutBack();
  };

  const aboutCartRendrer = () => {
    return (
      <>
        <Header />
        <div className="aboutCart">
          <div>
            <Link onClick={handleBack} to="/" className="back__link">
              Back
            </Link>
          </div>
          <div className="aboutCart_moreDetail">
            {aboutCartPhotoRendrer()}
            <div className="aboutCart_content">
              <h1 className="aboutCart_title">{productList?.name}</h1>
              <p className="aboutCart_text">{productList?.description}</p>
              <form action="#" className="aboutCart_form">
                <Input className="aboutCart_inp" placeholder="Email" />

                <Button className="aboutCart_btn" onClick={notify}>
                  Pre-order Now
                </Button>
                <ToastContainer theme="dark" />
              </form>
            </div>
          </div>
          <div className="aboutCart_relatedCarts">
            <h2 className="aboutCart_relatedCarts_title">Related Figures</h2>
            <div className="aboutCart_relatedCarts_content">
              {<Cart state={relatedProductsList} onClick={handleScroll} />}
            </div>
          </div>
        </div>
      </>
    );
  };

  return isLoad ? <Loading /> : aboutCartRendrer();
};

export default AboutCart;
