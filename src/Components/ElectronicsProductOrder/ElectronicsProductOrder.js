import React, { useState, useEffect } from "react";
import "./ElectronicsProductOrder.css";
import ElectroProduct from "../ElectroProduct/ElectroProduct";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ElectronicsProductShop = () => {
  const [ElectroProducts, setElectroProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setElectroProducts(data));
  }, []);

  const AddtoCarthandle = (product) => {
    // console.log(product);
    const newcart = [...cart, product];
    setCart(newcart);
    // console.log(newcart);
  };

  const ChooseButton = () => {
    const chooseramdom = cart[Math.floor(Math.random() * cart.length)];
    setRandom(chooseramdom);
    //console.log(chooseramdom);
  };
  const Delete = () => {
    setCart([]);
  };

  return (
    <div>
      <div className="header_side">
        <h1>Buy Best One Refrigerator</h1>
      </div>
      <div className="product_info">
        <div className="main_product">
          {ElectroProducts.map((product) => (
            <ElectroProduct
              key={product.id}
              product={product}
              AddtoCarthandle={AddtoCarthandle}
            ></ElectroProduct>
          ))}
        </div>

        <div className="summary">
          <div>
            <h4>Select Refrigerator</h4>
          </div>
          <div className="cart_image">
           
            {cart.map((item) => (
              <p key={item.id}>
                <img src={item.image} alt="" /> {item.Brand}{" "}
                <button className="delete_button">
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
              </p>
            ))}
          </div>
          <Cart random={random}></Cart>
          <div>
            <button onClick={ChooseButton} className="choose">
              Choose the best one
            </button>
            <button onClick={Delete} className="choose_again">
              Reset Again
            </button>
          </div>
        </div>
      </div>
      <div className="text_ques">
        <h4>Question 1 : How React Works</h4>
        <p>
          Ans:React is a JavaScript library. It is maintained by Facebook. React
          creates user interfaces in a efficient way using declarative code. we
          can use react to build single page applications and mobile app . It
          designs simple views for each state in our application. React will
          efficiently update and render just the right component when our data
          changes. v{" "}
        </p>
        <h4> Question 2 :Props vs state</h4>
        <p>
          1. State: A state is a variable which exists inside a component, that
          cannot be accessed and modified outside the component and can only be
          used inside the component. Works very similarly to a variable that is
          declared inside a function that cannot be accessed outside the scope
          of the function in normal javascript.State Can be modified using
          this.setState. State can be asynchronous.
        </p>
        <p>
          2. Props: We know that components in React are used again and again in
          the UI, but we don’t normally render the same component with the same
          data. Sometimes we need to change the content inside a component.
          Props come to play in these cases, as they are passed into the
          component and the use
        </p>
        <h4>Question 3 How useState works</h4>
        <p>
          Ans:useState is a Hook that allows you to have state variables in
          functional components. we pass the initial state to this function and
          it returns a variable with the current state value and another
          function to update this value.
        </p>
      </div>
    </div>
  );
};

export default ElectronicsProductShop;
