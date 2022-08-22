import { combineReducers } from 'redux';

import { userReducer } from '@store/modules/user/reducer';

export default combineReducers({
  user: userReducer
});
