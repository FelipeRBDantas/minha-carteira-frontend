import { combineReducers } from 'redux';

import { notificationsReducer } from '@store/modules/app/notifications/reducer';

import { themesReducer } from '@store/modules/app/themes/reducer';

export default combineReducers({
  notifications: notificationsReducer,
  themes: themesReducer
});
