import { utils } from '@/lib';
import { Action, ThemeColors, Theme } from '@/types';
import lightTheme from './light';

type InitialState = {
  mode: string;
  colors: ThemeColors;
  update: (theme: Theme) => Promise<void>;
};

const THEMES = { light: lightTheme };

export const initialState: InitialState = {
  mode: 'light',
  colors: THEMES.light,
  update: async () => {},
};

const reducer = (state = initialState, action: Action) => {
  let { type } = action;
  const { value } = action;
  const isCurrentAndNewStateDifferent = Object.entries(value).some(
    ([key, val]) => {
      return (
        utils.stringify(state[key as keyof typeof initialState]) !==
        utils.stringify(val)
      );
    },
  );

  if (!isCurrentAndNewStateDifferent) {
    type = '';
  }

  switch (type) {
    case 'add':
      return { ...state, ...value };
    default:
      return state;
  }
};

export default reducer;
