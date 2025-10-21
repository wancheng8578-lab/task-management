import { utils } from '@/lib';
import { Action, NewTask } from '@/types';

type InitialState = {
  update: (newTask: Partial<NewTask>) => Promise<boolean>;
  reset: () => Promise<boolean>;
} & NewTask;

export const initialState: InitialState = {
  update: async () => {
    return false;
  },
  reset: async () => {
    return false;
  },
  title: ``,
  description: ``,
  status: ``,
  type: ``,
  dueDate: ``,
  assignee: { label: ``, value: `` },
  urgency: ``,
};

export default (state = initialState, action: Action) => {
  let { type } = action;
  const { value } = action;
  const isCurrentAndNewStateDifferent = Object.entries(value).some(
    ([key, value]) => {
      return (
        utils.stringify(state[key as keyof typeof initialState]) !==
        utils.stringify(value)
      );
    },
  );

  if (!isCurrentAndNewStateDifferent) {
    type = ``;
  }

  switch (type) {
    case `add`:
      return { ...state, ...value };
    default:
      return state;
  }
};
