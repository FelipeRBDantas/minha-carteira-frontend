import {
  GetEndPointsByOrganState, 
  GET_ENDPOINTS_BY_ORGAN_FAILURE, 
  GET_ENDPOINTS_BY_ORGAN_REQUEST, 
  GET_ENDPOINTS_BY_ORGAN_SUCCESS,
  GET_ENDPOINTS_BY_ORGAN_CLEAR
} from '@store/modules/api/endPoints/getEndPointsByOrgan/types';

import { ReducerAction } from '@store/modules/api/endPoints/getEndPointsByOrgan/types';

const initialState: GetEndPointsByOrganState = {
  data: [],
  status: 0,
  params: {
    organId: 0
  }
}

export const getEndPointsByOrganReducer = (state = initialState, action: ReducerAction) : GetEndPointsByOrganState => {
  switch (action.type) {
    case GET_ENDPOINTS_BY_ORGAN_REQUEST:
      return {
        ...state,
        params: { ...action.params },
        status: 100
      };
    case GET_ENDPOINTS_BY_ORGAN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: 200,
        params: { ...action.params }
      };
    case GET_ENDPOINTS_BY_ORGAN_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        params: { ...action.params }
      };
      
    case GET_ENDPOINTS_BY_ORGAN_CLEAR:
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
