import React, { createContext, useContext, useState, useEffect } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });

  const addPayment = (payment) => {
    const updated = [...payments, payment];
    setPayments(updated);
    localStorage.setItem('orders', JSON.stringify(updated));
  };

  return (
    <PaymentContext.Provider value={{ payments, addPayment }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayments = () => useContext(PaymentContext);
