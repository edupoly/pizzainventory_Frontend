import React, { useEffect, useState } from 'react';
import { useCart } from '../Components/CartContext';
import { usePayments } from '../Components/PaymentContext'; // ⬅ Add this
import { useNavigate } from 'react-router-dom'; // ⬅ For navigation
import socket from '../socketService';
import './Billing.css';

const Billing = () => {
  const { cart, clearCart } = useCart();
  const { addPayment } = usePayments(); // ⬅ From PaymentContext
  const navigate = useNavigate(); // ⬅ Used to redirect
  const [customerName, setCustomerName] = useState('');

  const totalPrice = cart.reduce((sum, item) => {
    const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
    return sum + (item.pizza.price + sizePrice) * item.quantity;
  }, 0);

  const handlePaymentConfirm = () => {
    if (!customerName.trim()) {
      alert('Please enter your name before confirming payment.');
      return;
    }
    alert("Order Confirmed")

    const paymentDetails = {
      customerName: customerName.trim(),
      items: cart.map(item => ({
        name: item.pizza.name,
        size: item.size,
        qty: item.quantity,
        unitPrice: item.pizza.price + item.pizza.sizes.find(s => s.size === item.size).price,
        total: (item.pizza.price + item.pizza.sizes.find(s => s.size === item.size).price) * item.quantity,
      })),
      totalAmount: totalPrice,
      timestamp: new Date().toISOString(),
    };

    socket.emit('new-order', paymentDetails);

    clearCart();
    setCustomerName('');

  };

  useEffect(() => {
    socket.on('payment-confirmed', (details) => {
      console.log('Payment confirmed from server:', details);
    });

    return () => {
      socket.off('payment-confirmed');
    };
  }, []);

  return (
    <div className="billing-container">
      <h2 className='fw-bold'>Billing Details</h2>

      <div className="customer-name-field">
        <label htmlFor="customerName">Enter Your Name:</label>
        <input
          id="customerName"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Your Name"
        />
      </div>

      {cart.length === 0 ? (
        <div>No items in cart</div>
      ) : (
        <ul className="billing-list">
          {cart.map((item, i) => {
            const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
            const itemTotal = (item.pizza.price + sizePrice) * item.quantity;
            return (
              <li key={i} className="billing-item d-flex justify-content-between">
                <div className='row w-100'>
                  <p className='col-7 text-start p-0'>{item.pizza.name} ({item.size})</p>
                  <p className='col-2 d-flex'>× {item.quantity}</p>
                </div>
                <div>₹{itemTotal.toFixed(2)}/-</div>
              </li>
            );
          })}
        </ul>
      )}

      <div className="billing-total">
        <h3>Total: ₹{totalPrice.toFixed(2)}/-</h3>
        <button
          className="pay-btn"
          onClick={handlePaymentConfirm}
          disabled={!customerName.trim() || cart.length === 0}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Billing;
