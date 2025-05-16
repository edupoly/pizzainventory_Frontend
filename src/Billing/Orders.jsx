import React, { useEffect, useState } from 'react';
import socket from '../socketService';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();

    socket.on('order-received', (newOrder) => {
      setOrders(prevOrders => [...prevOrders, newOrder]);
    });

    return () => {
      socket.off('order-received');
    };
  }, []);

  return (
    <div className="orders-container">
      <h2>All Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.slice().reverse().map((order, index) => (
          <div key={index} className="order-card">
            <p><strong>Name:</strong> {order.customerName}</p>
            <p><strong>Total:</strong> ₹{order.totalAmount?.toFixed(2)}</p>
            <p><strong>Time:</strong> {new Date(order.timestamp).toLocaleString()}</p>
            <ul>
              {order.items.map((item, i) => (
                <li key={i}>
                  {item.name} ({item.size}) × {item.qty} = Rs{item.total?.toFixed(2)}
                </li>
              ))}
            </ul>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
