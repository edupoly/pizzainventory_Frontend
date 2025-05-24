
import React, { useEffect } from 'react';
import { useCart } from '../Components/CartContext';
import { Link } from 'react-router-dom';
import Billing from '../Billing/Billing';
import './Cart.css';

const Cart = () => {
  const { cart,setCart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
    return total + (item.pizza.price + sizePrice) * item.quantity;
  }, 0);

  
  const updateQuantity = (id,size,quantity,index) =>{
    const tempCart = [...cart];
    tempCart[index]._id=id
    tempCart[index].size=size
    tempCart[index].quantity=quantity
    setCart([...tempCart])
    
  }

  const removeFromCart = (index) => {
    const tempCart = [...cart];
    tempCart.splice(index,1)
    setCart([...tempCart])
  }
  useEffect(() => {
    console.log(cart);
    
  }, [cart])
  

  return (
    <div className="cart-container container">
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
                <div className='d-flex align-items-center gap-3 w-100'>
                  <div style={{width:"100px",height:"100px"}}>
                    <img className='w-100 h-100' style={{objectFit:"cover"}} src={item.pizza.image} alt={item.pizza.name} />
                  </div>
                  <div className="cart-item-info ms-2 text-start d-block d-md-flex justify-content-between w-100 ">
                    <div>
                    <strong className='fs-5'>{item.pizza.name}</strong> ({item.size})
                    <div className="cart-controls">
                      <span className="fs-5">Quantity: </span>
                      <button type='button' className='btn btn-danger' style={{padding:"2px 12px"}} onClick={() => updateQuantity(item.pizza._id, item.size, item.quantity - 1,index)} disabled={item.quantity <= 1}>-</button>
                      <span>{item.quantity}</span>
                      <button type='button' className='btn btn-success' style={{padding:"2px 12px"}} onClick={() => updateQuantity(item.pizza._id, item.size, item.quantity + 1,index)}>+</button>
                      {/* <span className="price">Rs{itemTotal.toFixed(2)}</span> */}
                    </div>
                  </div>
                  <div className="cart-controls">
                    <p className="price mb-1 fs-5">Price: ₹{itemTotal.toFixed(2)}/-</p>
                    <button className="btn btn-primary rounded d-none d-md-flex align-self-center" onClick={() => removeFromCart(/* item.pizza._id, item.size, */index)}>Remove</button>
                  </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="cart-total">
        <h3 className='float-end'>Total Amount: ₹{totalPrice.toFixed(2)}/-</h3>
        <Link to ="/billing" className='text-decoration-none'>{cart.length > 0 && <button className="checkout-btn ">Proceed to Checkout</button>}</Link>
      </div>
    </div>
  );
};

export default Cart;
