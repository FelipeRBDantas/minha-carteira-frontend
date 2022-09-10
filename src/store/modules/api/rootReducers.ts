import { combineReducers } from 'redux';

import endPoints from '@store/modules/api/endPoints/rootReducers';

export default combineReducers({
  endPoints,
});
