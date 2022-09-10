import { combineReducers } from 'redux';

import { notificationsReducer } from '@store/modules/app/notifications/reducer';

export default combineReducers({
  notifications: notificationsReducer
});
