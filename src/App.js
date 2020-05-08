import React from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Mirror } from './components/Counter/CounterMirror';
import CounterProvider from './contexts/CounterContext';
import { Todo } from './components/Todo/Todo';
import TodoProvider from './contexts/TodoContext';
import TodoMirror from './components/Todo/TodoMirror';

const container = {
  margin: 20
}

function App() {
  return (
    <div style={container}>
      <CounterProvider>
        <h1>Counter</h1>
        <div>
          <Counter />
          <Mirror />
        </div>
      </CounterProvider>

      <hr />

      <TodoProvider>
        <h1>To do</h1>
        <Todo />
        <TodoMirror />
      </TodoProvider>
      <hr />
    </div>
  );
}

export default App;
