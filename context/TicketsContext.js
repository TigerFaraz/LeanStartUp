// context/TicketsContext.js
import React, { useMemo, useState, useContext, createContext } from 'react';

const TicketsContext = createContext();
export const useTickets = () => useContext(TicketsContext);

export function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState([
    { id: 't1', title: 'Tivoli: Fredagsrock', partner: 'Tivoli', category: 'Koncert', price: 350, qty: 2, city: 'København' },
    { id: 't2', title: 'Royal Arena: Coldplay', partner: 'Royal Arena', category: 'Koncert', price: 1200, qty: 2, city: 'København' },
    { id: 't3', title: 'Nordisk Biograf: Batman', partner: 'Nordisk Biograf', category: 'Biograf', price: 120, qty: 3, city: 'Aarhus' },
  ]);

  const addTicket = (t) => {
    const id = `t${Date.now()}`;
    setTickets((prev) => [{ id, ...t }, ...prev]);
  };

  const value = useMemo(() => ({ tickets, addTicket }), [tickets]);
  return <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>;
}
