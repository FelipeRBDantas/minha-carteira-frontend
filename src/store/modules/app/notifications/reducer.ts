import {
  NotificationsState, 
  ADD_NOTIFICATIONS,
  CLEAR_NOTIFICATIONS,
} from '@store/modules/app/notifications/types';

import { ReducerAction } from '@store/types';

const initialState: NotificationsState = {
  errors: [],
  message: null
}

export const notificationsReducer = (state = initialState, action: ReducerAction) : NotificationsState => {
  switch (action.type) {
    case ADD_NOTIFICATIONS:
      return {
        ...state,
        errors: action.payload.errors,
        message: action.payload.message,
      };

    case CLEAR_NOTIFICATIONS:
      return {
        ...state,
        errors: initialState.errors,
        message: initialState.message,
      };

    default:
      return state;
  }
}
