import React, { createContext, useState, useContext } from 'react';

// Create Context
const OrderDetailsContext = createContext();

// Create a Provider Component
export function OrderDetailsProvider({ children }) {
    const [orderDetails, setOrderDetails] = useState({
        username: '',
        total_items: '',
        overall_subtotal: '',
        card_holder_name: '',
        card_last_4_digits: '',
        payment_status: '',
        items: '',
        order_date: ''
    });

    const updateOrderDetails = (data) => {
        setOrderDetails(prevData => ({
            ...prevData,
            ...data
        }));
    };

    return (
        <OrderDetailsContext.Provider value={{ orderDetails, updateOrderDetails }}>
            {children}
        </OrderDetailsContext.Provider>
    );
}

// Custom hook to use the Order Details Context
export function useOrderDetails() {
    return useContext(OrderDetailsContext);
}
