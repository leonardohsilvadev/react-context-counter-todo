import React from 'react';
import { useCounter } from '../../contexts/CounterContext';

const Styles = {
    counterContainer: {
        flexDirection: 'row'
    },
    buttonStyle: {
        marginRight: 20
    }
};

export function Counter() {
    const { count, setCount, countIncrease } = useCounter();

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={countIncrease} style={Styles.buttonStyle}>
                Increase
            </button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}