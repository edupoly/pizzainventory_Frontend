
import React from 'react';
import { useCart } from '../Components/CartContext';
import { Link } from 'react-router-dom';
import Billing from '../Billing/Billing';
import './Cart.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
    return total + (item.pizza.price + sizePrice) * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => {
            const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
            const itemTotal = (item.pizza.price + sizePrice) * item.quantity;
            
            return (
              <li key={index} className="cart-item">
                <div className="cart-item-info">
                  <strong>{item.pizza.name}</strong> ({item.size})
                </div>
                <div className="cart-controls">
                  <button onClick={() => updateQuantity(item.pizza._id, item.size, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.pizza._id, item.size, item.quantity + 1)}>+</button>
                  <span className="price">Rs{itemTotal.toFixed(2)}</span>
                  <button className="remove-btn" onClick={() => removeFromCart(item.pizza._id, item.size)}>Remove</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="cart-total">
        <h3>Total: Rs{totalPrice.toFixed(2)}</h3>
        <Link to ="/billing">{cart.length > 0 && <button className="checkout-btn">Proceed to Checkout</button>}</Link>
      </div>
    </div>
  );
};

export default Cart;
