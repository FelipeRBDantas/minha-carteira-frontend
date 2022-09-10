import { combineReducers } from 'redux';

import { endPointsCountReducer } from '@store/modules/api/endPoints/endPointsCount/reducer';

import { getEndPointsByOrganReducer } from '@store/modules/api/endPoints/getEndPointsByOrgan/reducer';

import { postEndPointReducer } from '@store/modules/api/endPoints/postEndPoint/reducer';

import { deleteEndPointReducer } from '@store/modules/api/endPoints/deleteEndPoint/reducer';

export default combineReducers({
  endPointsCount: endPointsCountReducer,
  getEndPointsByOrgan: getEndPointsByOrganReducer,
  postEndPoint: postEndPointReducer,
  deleteEndPoint: deleteEndPointReducer
});
