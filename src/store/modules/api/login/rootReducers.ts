import { combineReducers } from 'redux';

import { postLoginReducer } from '@store/modules/api/login/postLogin/reducer';

export default combineReducers({
  postLogin: postLoginReducer
});
