import {
  EndPointsCountState, 
  GET_ENDPOINTS_COUNT_FAILURE, 
  GET_ENDPOINTS_COUNT_REQUEST, 
  GET_ENDPOINTS_COUNT_SUCCESS,
  GET_ENDPOINTS_COUNT_CLEAR
} from '@store/modules/api/endPoints/endPointsCount/types';

import { ReducerAction } from '@store/types';

const initialState: EndPointsCountState = {
  data: [],
  status: 0
}

export const endPointsCountReducer = (state = initialState, action: ReducerAction) : EndPointsCountState => {
  switch (action.type) {
    case GET_ENDPOINTS_COUNT_REQUEST:
      return {
        ...state,
        status: 100
      };
    case GET_ENDPOINTS_COUNT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: 200
      };
    case GET_ENDPOINTS_COUNT_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
      
    case GET_ENDPOINTS_COUNT_CLEAR:
      return {
        ...state,
        data: initialState.data,
        status: initialState.status
      };
    default:
      return state;
  }
}
