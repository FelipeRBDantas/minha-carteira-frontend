import {
  ThemeState, 
  ADD_THEME,
} from '@store/modules/app/themes/types';

import { ReducerAction } from '@store/types';

import dark from '@styles/themes/dark';

const initialState: ThemeState = {
  theme: dark
}

export const themesReducer = (state = initialState, action: ReducerAction) : ThemeState => {
  switch (action.type) {
    case ADD_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
}
