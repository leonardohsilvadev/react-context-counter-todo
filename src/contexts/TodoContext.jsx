import React, { createContext, useState, useContext } from 'react';

const TodoContext = createContext();

export default function TodoProvider({ children }) {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Study',
            done: true
        },
        {
            id: 2,
            title: 'Go to the bakery',
            done: false
        },
        {
            id: 3,
            title: 'Watch series',
            done: false
        }
    ]);

    function addTodo() {
        if (todo === '') {
            return alert('Todo need a title');
        }

        setTodos([...todos, { id: todos.length + 1, title: todo, done: false }]);
        setTodo('');
    }

    function toggleTodo(i) {
        const todosCopy = [...todos];
        todosCopy[i].done = !todosCopy[i].done;
        setTodos(todosCopy);
    }

    function changeInput(e) {
        setTodo(e.target.value);
    }

    return (
        <TodoContext.Provider
            value={{ todo, setTodo, todos, setTodos, addTodo, toggleTodo, changeInput }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export function useTodos() {
    const {
        todo,
        setTodo,
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        changeInput
    } = useContext(TodoContext);
    return { todo, setTodo, todos, setTodos, addTodo, toggleTodo, changeInput };
}