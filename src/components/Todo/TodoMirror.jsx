import React from 'react';
import { useTodos } from '../../contexts/TodoContext';

export default function TodoMirror() {
    const { todos } = useTodos();

    return (
        <div>
            <h3>To do Mirror List</h3>
            <ol>
                {todos.map((todo, i) => (
                    <li key={i.toString()} style={{ color: todo.done ? 'green' : 'black' }}>
                        {todo.title}
                    </li>
                ))}
            </ol>
        </div>
    )
}