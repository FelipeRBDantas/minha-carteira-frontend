import { combineReducers } from 'redux';

import api from '@store/modules/api/rootReducers';

import app from '@store/modules/app/rootReducers';

export default combineReducers({
  api,
  app
});
