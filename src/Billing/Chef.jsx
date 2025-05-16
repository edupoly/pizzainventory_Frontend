import React, { useEffect, useState } from 'react';
import socket from '../socketService';
import Button from 'react-bootstrap/Button';
import "./Chef.css";
const Chef = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch('http://localhost:5000/api/orders/active');
        const data = await res.json();
        setOrders(data);
      } catch (e) {
        console.error('Failed to load orders:', e);
      }
    })();
  }, []);

  useEffect(() => {
    const addOrder = (o) => setOrders((prev) => [...prev, o]);

    const updateStatus = ({ orderId, status }) =>
      setOrders((prev) =>
        prev
          .map((o) => (o._id === orderId ? { ...o, status } : o))
          .filter((o) => o.status !== 'FINISHED')   
      );

    socket.on('order-received', addOrder);
    socket.on('order-status-updated', updateStatus);

    socket.on('order-proceeded', (id) =>
      setOrders((prev) => prev.filter((o) => o._id !== id))
    );

    return () => {
      socket.off('order-received', addOrder);
      socket.off('order-status-updated', updateStatus);
      socket.off('order-proceeded');
    };
  }, []);

  const nextStatus = (s) =>
    s === 'PENDING'   ? 'PREPARING' :
    s === 'PREPARING' ? 'FINISHED'  :
    s;

  const advance = (order) => {
    const status = nextStatus(order.status);
    socket.emit('update-order-status', { orderId: order._id, status });

    if (status === 'FINISHED') {
      setOrders((prev) => prev.filter((o) => o._id !== order._id));
    } else {
      setOrders((prev) =>
        prev.map((o) => (o._id === order._id ? { ...o, status } : o))
      );
    }
  };


  return (
    <div className="orders-container">
      <h2>Chef Dashboard</h2>

      {orders.length === 0 ? (
        <p>No active orders.</p>
      ) : (
        orders.slice().reverse().map((o) => (
          <div key={o._id} className="order-card">
            <p><strong>Name:</strong> {o.customerName}</p>
            <p><strong>Total:</strong> ₹{o.totalAmount.toFixed(2)}</p>
            <p><strong>Time:</strong> {new Date(o.timestamp).toLocaleString()}</p>
            <p><strong>Status:</strong> {o.status}</p>

            {o.status !== 'FINISHED' && (
              <Button
                variant={o.status === 'PENDING' ? 'warning' : 'success'}
                onClick={() => advance(o)}
                className="mb-2"
              >
                {o.status === 'PENDING' ? 'Start Preparing' : 'Mark Finished'}
              </Button>
            )}

            <ul>
              {o.items.map((item, i) => (
                <li key={i}>
                  {item.name} ({item.size}) × {item.qty} = ₹{item.total.toFixed(2)}
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

export default Chef;
