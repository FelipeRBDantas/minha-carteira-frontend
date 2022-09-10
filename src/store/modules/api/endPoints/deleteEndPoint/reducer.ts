import {
  DeleteEndPointState, 
  DELETE_ENDPOINT_FAILURE, 
  DELETE_ENDPOINT_REQUEST, 
  DELETE_ENDPOINT_SUCCESS,
  DELETE_ENDPOINT_CLEAR
} from '@store/modules/api/endPoints/deleteEndPoint/types';

import { ReducerAction } from '@store/modules/api/endPoints/deleteEndPoint/types';

const initialState: DeleteEndPointState = {
  data: null,
  status: 0,
  params: {
    endPointId: 0
  }
}

export const deleteEndPointReducer = (state = initialState, action: ReducerAction) : DeleteEndPointState => {
  switch (action.type) {
    case DELETE_ENDPOINT_REQUEST:
      return {
        ...state,
        params: { ...action.params },
        status: 100
      };
    case DELETE_ENDPOINT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: 204,
        params: { ...action.params }
      };
    case DELETE_ENDPOINT_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        params: { ...action.params }
      };
      
    case DELETE_ENDPOINT_CLEAR:
      return {
        ...state,
        data: initialState.data,
        status: initialState.status,
        params: initialState.params
      };
    default:
      return state;
  }
}
