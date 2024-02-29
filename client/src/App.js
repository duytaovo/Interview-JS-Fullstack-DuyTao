import "./App.css";
import { useState, useEffect } from "react";

import logo from "./assets/nike.png";
import trash from "./assets/trash.png";
import plus from "./assets/plus.png";
import minus from "./assets/minus.png";

import { caculateTotalPrice, formatPrice } from "./helpers/format";
import API from "./api.js";
import ProductCard from "./components/product-card/index.jsx";
import data from "./data/shoes.json";

function App() {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    API.get("/")
      .then((response) => {
        // setShoes(data.shoes);
        setShoes(response.data.products);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    const cartData = JSON.parse(localStorage.getItem("dataCart"));
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  const changeQuantity = (product, num, e) => {
    if (product.quantity + num === 0) {
      handleRemoveFromCart(product._id, e);
      return;
    }
    const newCart = cart.map((p) => {
      if (p._id === product._id) {
        return { ...p, quantity: p.quantity + num };
      }
      return p;
    });
    const total = caculateTotalPrice(newCart);
    setTotalPrice(total);
    localStorage.setItem("dataCart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const handleRemoveFromCart = (productId, e) => {
    const cartItem = e.target.closest(".cart-item");
    cartItem.classList.add("fade-out");
    cartItem.classList.add("zoom-in");
    const newCart = cart.filter((p) => p._id !== productId);
    localStorage.setItem("dataCart", JSON.stringify(newCart));
    const total = caculateTotalPrice(newCart);
    setTotalPrice(total);

    setTimeout(() => {
      setCart(newCart);
    }, 600);
  };

  return (
    <div className="container">
      <div className="w-full min-h-[100vh] flex justify-center items-center flex-wrap p-5 gap-10 app">
        <div className="flex-[0_0_350px] h-[520px] hidden flex-col relative card">
          <div className=" top-0 left-0 relative z-10 header">
            <img
              src={logo}
              alt="logo"
              className="w-[50px] object-contain logo"
              logo
            />
            <h2 className="title">Our products</h2>
          </div>
          <div className="overflow-scroll h-full z-10 content">
            <div className="flex flex-col product-list">
              {shoes.map((product, index) => (
                <ProductCard
                  cart={cart}
                  setCart={setCart}
                  setTotalPrice={setTotalPrice}
                  key={index}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-[0_0_350px] h-[520px] hidden flex-col relative card">
          <div className="top-0 left-0 relative z-10 header">
            <img
              src={logo}
              alt="logo"
              className="w-[50px] object-contain logo"
            />
            <div>
              <h2 className="title">Your cart</h2>
              <h2>{formatPrice.format(totalPrice)}</h2>
            </div>
          </div>
          <div className="overflow-scroll h-full z-10 content">
            <div className="flex flex-col cart-list">
              {cart.length > 0
                ? cart.map((p) => (
                    <div className="flex gap-[15px] cart-item" key={p._id}>
                      <div
                        className="flex-[0_0_100px] relative left"
                        style={{ "--background-color": p.color }}
                      >
                        <img src={p.image} alt={p.name} className="img" />
                      </div>
                      <div className="flex-1 flex flex-col gap-[10px] z-10 right">
                        <h5 className="name">{p.name}</h5>
                        <h3 className="price">{formatPrice.format(p.price)}</h3>
                        <div>
                          <div className="flex items-center gap-[10px] quantity-wrapper">
                            <button
                              className="btn-quantity"
                              onClick={(e) => changeQuantity(p, -1, e)}
                            >
                              <img src={minus} alt="minus" />
                            </button>
                            <span>{p.quantity}</span>
                            <button className="btn-quantity">
                              <img
                                src={plus}
                                alt="plus"
                                onClick={() => changeQuantity(p, 1)}
                              />
                            </button>
                          </div>
                          <button
                            className="btn-del"
                            onClick={(e) => handleRemoveFromCart(p._id, e)}
                          >
                            <img src={trash} alt="delete" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                : "Your cart is empty"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

