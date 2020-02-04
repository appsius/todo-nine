import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducers';

const defaultTodos = [
  { id: 1, task: 'Move out the door', completed: false },
  { id: 2, task: 'Relase latest edition', completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export default function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
