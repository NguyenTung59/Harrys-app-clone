import Head from "next/head";
import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import HomePage from "../components/home/HomePage";
import HarrysBody from "../components/harrys/index";
import Https from './https/port'

const Home = ({ Data }) => {
  // check click box cart
  const [clicked, setClicked] = useState(false);
  // list products get api
  const [products, setProducts] = useState(Data);
  
  // current product
  const [currentProduct, setCurrentProduct] = useState(
    products.length > 0 ? products[products.length - 1] : products[0]
  );
  //index of product in list products
  const [activeIndex, setActiveIndex] = useState(
    currentProduct.imgUrl.length > 0 ? currentProduct.imgUrl.length - 1 : 0
  );
  // list url of product
  const [currentImage, setCurrentImage] = useState(
    currentProduct.imgUrl[activeIndex]
  );
  //count
  const [count, setCount] = useState(1);
  const [currentCount, setCurrentCount] = useState(0);
  const [total, setTotal] = useState(0);

  // Decrement Count
  const decrementCount = () => {
    setCount(count > 0 ? (prevCount) => prevCount - 1 : 0);
  };
  // Increment count
  const incrementCount = () => {
    setCount(count < 0 ? 0 : (prevCount) => prevCount + 1);
  };

  // handle change main image
  const handleChangeImage = (e) => {
    const newActiveIndex = e.target.getAttribute("data-index");
    setActiveIndex(newActiveIndex);
    setCurrentImage(currentProduct.imgUrl[newActiveIndex]);
  };

  // add product
  const addToCart = () => {
    setCurrentProduct(products[activeIndex]);
    setCurrentCount((prevCount) => prevCount + count);
    setTotal(currentCount * currentProduct);
  };

  // remove product
  const removeProduct = () => {
    setCurrentCount(currentCount > 0 ? (prevCount) => prevCount - 1 : 0);
  };

  // click box cart
  const handleClickBox = () => {
    setClicked(!clicked);
  };

  // close box cart
  const handleCloseBox = () => {
    clicked == true ? setClicked(false) : console.log(false);
  };
  return (
    <div>
      <Head>
        <title>Harrys App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page-harrys">
        <div>
          {/* harrys page  */}
          {/* <AppHarrys /> */}
          <HomePage
            clicked={clicked}
            handleClickBox={handleClickBox}
            currentProduct={currentProduct}
            currentImage={currentImage}
            count={currentCount}
            removeProduct={removeProduct}
            total={total}
          />
          <HarrysBody
            onClick={handleCloseBox}
            setClicked={setClicked}
            addToCart={addToCart}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
            currentImage={currentImage}
            currentProduct={currentProduct}
            handleChangeImage={handleChangeImage}
            count={count}
          />
        </div>
      </main>
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(
    `${Https}/api/products`
  );
  const { data } = await res.json();
  return { Data: data };
};

export default Home;
