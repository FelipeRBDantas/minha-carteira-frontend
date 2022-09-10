import {
  PostEndPointState, 
  POST_ENDPOINT_FAILURE, 
  POST_ENDPOINT_REQUEST, 
  POST_ENDPOINT_SUCCESS,
  POST_ENDPOINT_CLEAR
} from '@store/modules/api/endPoints/postEndPoint/types';

import { ReducerAction } from '@store/modules/api/endPoints/postEndPoint/types';

const initialState: PostEndPointState = {
  data: null,
  status: 0
}

export const postEndPointReducer = (state = initialState, action: ReducerAction) : PostEndPointState => {
  switch (action.type) {
    case POST_ENDPOINT_REQUEST:
      return {
        ...state,
        status: 100
      };
    case POST_ENDPOINT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: 200
      };
    case POST_ENDPOINT_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status
      };
      
    case POST_ENDPOINT_CLEAR:
      return {
        ...state,
        data: initialState.data,
        status: initialState.status
      };
    default:
      return state;
  }
}
