import {
  GET_ENDPOINTS_COUNT_FAILURE, 
  GET_ENDPOINTS_COUNT_REQUEST, 
  GET_ENDPOINTS_COUNT_SUCCESS 
} from '@store/modules/api/endPoints/endPointsCount/types';

import { ReducerAction } from '@store/types';

export function getEndPointsCountRequest(): ReducerAction {
  return {
    type: GET_ENDPOINTS_COUNT_REQUEST,
    payload: null
  };
}

export function getEndPointsCountSuccess(payload: object): ReducerAction {
  return {
    type: GET_ENDPOINTS_COUNT_SUCCESS,
    payload
  };
}

export function getEndPointsCountFailure(payload: object): ReducerAction {
  return {
    type: GET_ENDPOINTS_COUNT_FAILURE,
    payload
  };
}
export function getEndPointsCountClear(): ReducerAction {
  return {
    type: GET_ENDPOINTS_COUNT_FAILURE,
    payload: null
  };
}
