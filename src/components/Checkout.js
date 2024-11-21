import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export default function Checkout() {
  const { items, updateItemQuantity } = useContext(CartContext);


  function calculoTotal() {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }


  function renderCartItems() {
    return items.map((item) => (
      <li key={item.id} className="checkout-item">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="checkout-item-image"
        />
        <div className="checkout-item-info">
          <h3>{item.title}</h3>
          <p>Preço: ${item.price.toFixed(2)}</p>
        </div>
        <div className="checkout-item-actions">
          <button onClick={() => updateItemQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateItemQuantity(item.id, 1)}>+</button>
        </div>
      </li>
    ));
  }


  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <Link to="/" className="product-actions">
        <button>RETURN</button>
      </Link>


      {items.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul className="checkout-items">{renderCartItems()}</ul>
          <div className="checkout-total">
            <h3>Total: ${calculoTotal().toFixed(2)}</h3>
          </div>
        </>
      )}
    </section>
  );
}
