import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducers';

const defaultTodos = [
  { id: 1, task: 'Move out the door', completed: false },
  { id: 2, task: 'Relase latest edition', completed: true }
];

export const TodosContext = createContext();

export default function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
