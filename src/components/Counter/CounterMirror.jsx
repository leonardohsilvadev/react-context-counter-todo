import React from 'react';
import { useCounter } from '../../contexts/CounterContext';

export function Mirror() {
    const { count } = useCounter();

    return <h3>Mirror Count: {count}</h3>
}