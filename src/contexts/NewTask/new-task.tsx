'use client';

import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';
import { HighOrderComponent, NewTask } from '@/types';

const Context = createContext(initialState);

export const Provider = ({ children }: HighOrderComponent) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const update = async (transaction: Partial<NewTask>) => {
    dispatch({ type: `add`, value: transaction });
    return true;
  };

  const reset = async () => {
    dispatch({ type: `add`, value: initialState });
    return true;
  };

  return (
    <Context.Provider
      value={{
        ...state,
        update,
        reset,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useNewTask = () => {
  return useContext(Context);
};
