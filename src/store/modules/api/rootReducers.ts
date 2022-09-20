import { combineReducers } from 'redux';

import login from '@/store/modules/api/login/rootReducers';

export default combineReducers({
  login,
});
