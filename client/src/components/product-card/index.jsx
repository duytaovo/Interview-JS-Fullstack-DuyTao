import React from "react";
import { caculateTotalPrice, formatPrice } from "../../helpers/format";
import check from "../../assets/check.png";

function ProductCard({ product, setTotalPrice, cart, setCart }) {
  const p = product;
  const handleAddToCart = (product) => {
    const newCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem("dataCart", JSON.stringify(newCart));
    const total = caculateTotalPrice(newCart);
    setTotalPrice(total);
    setCart(newCart);
  };
  return (
    <div className="flex flex-col product-item" key={p._id}>
      <div
        className="w-full h-[330px] flex items-center img"
        style={{ "--background-color": p.color }}
      >
        <img className="w-full relative" src={p.image} alt={p.name} />
      </div>
      <h3 className="name">{p.name}</h3>
      <p className="decs">{p.description}</p>
      <div>
        <span className="font-bold text-[17px] price">
          {formatPrice.format(p.price)}
        </span>
        <button
          className="font-bold text-[18px] btn-add"
          onClick={() => handleAddToCart(p)}
          disabled={cart.some((cp) => cp._id === p._id)}
        >
          {cart.some((cp) => cp._id === p._id) ? (
            <img src={check} alt="added" className="icon-check" />
          ) : (
            <span>ADD TO CART</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

