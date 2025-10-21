'use client';

import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';
import lightTheme from './light';
import { HighOrderComponent, Theme } from '@/types';
import darkTheme from './dark';

const THEMES = { light: lightTheme, dark: darkTheme };

const Context = createContext(initialState);

export const Provider = ({ children }: HighOrderComponent) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const update = async (theme: Theme) => {
    if (Object.keys(THEMES).includes(theme?.mode)) {
      dispatch({ type: 'add', value: theme });
    }
  };

  return (
    <Context.Provider
      value={{
        ...state,
        colors: THEMES[state.mode as keyof typeof THEMES],
        update,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useTheme = () => {
  return useContext(Context);
};
