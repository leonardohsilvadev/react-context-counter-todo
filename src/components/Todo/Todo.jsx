import React from 'react';
import { useTodos } from '../../contexts/TodoContext';

const buttonStyle = {
    marginLeft: 20
};

export function Todo() {
    const { todo, todos, addTodo, toggleTodo, changeInput } = useTodos();

    return (
        <div>
            <h3>To do List</h3>
            <ol>
                {todos.map((todo, i) => (
                    <div key={i.toString()}>
                        <li style={{ color: todo.done ? 'green' : 'black' }}
                        >
                            {todo.title}
                            <input
                                type="checkbox"
                                id={`checkbox${i}`}
                                checked={todo.done}
                                value={todo.title}
                                onChange={() => toggleTodo(i)}
                            />
                        </li>
                    </div>
                ))}
            </ol>
            <input type="text" value={todo} onChange={changeInput} />
            <button onClick={addTodo} style={buttonStyle}>Add Todo</button>
        </div>
    )
}