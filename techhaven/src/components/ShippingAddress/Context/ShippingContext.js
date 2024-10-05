import React, { createContext, useState, useContext } from 'react';

// Create Context
const ShippingContext = createContext();

// Create a Provider Component
export function ShippingProvider({ children }) {
    const [shippingData, setShippingData] = useState({
        fullname: '',
        email: '',
        phone_number: '',
        street_address: '',
        city: '',
        state: '',
        country: '',
        postal_code: ''
    });

    const updateShippingData = (data) => {
        setShippingData(prevData => ({
            ...prevData,
            ...data
        }));
    };

    return (
        <ShippingContext.Provider value={{ shippingData, updateShippingData }}>
            {children}
        </ShippingContext.Provider>
    );
}

// Custom hook to use the Shipping Context
export function useShipping() {
    return useContext(ShippingContext);
}
