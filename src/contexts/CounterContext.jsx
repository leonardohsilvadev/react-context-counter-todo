import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export default function CounterProvider({ children }) {
    const [count, setCount] = useState(0);

    function countIncrease() {
        setCount(count + 1);
    }

    function countDecrease() {
        setCount(count - 1);
    }

    return (
        <CounterContext.Provider
            value={{ count, setCount, countIncrease, countDecrease }}
        >
            {children}
        </CounterContext.Provider>
    );
}

export function useCounter() {
    const { count, setCount, countIncrease, countDecrease } = useContext(CounterContext);
    return { count, setCount, countIncrease, countDecrease };
}