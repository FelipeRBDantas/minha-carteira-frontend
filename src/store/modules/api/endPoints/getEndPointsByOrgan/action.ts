import { 
  GET_ENDPOINTS_BY_ORGAN_FAILURE, 
  GET_ENDPOINTS_BY_ORGAN_REQUEST, 
  GET_ENDPOINTS_BY_ORGAN_SUCCESS,
  GET_ENDPOINTS_BY_ORGAN_CLEAR
} from '@store/modules/api/endPoints/getEndPointsByOrgan/types';

import { ReducerAction } from '@store/modules/api/endPoints/getEndPointsByOrgan/types';

export function getEndPointsByOrganRequest(organId: number): ReducerAction {
  return {
    type: GET_ENDPOINTS_BY_ORGAN_REQUEST,
    payload: null,
    params: {
      organId: organId
    },
  };
}

export function getEndPointsByOrganSuccess(payload: object, organId: number): ReducerAction {
  return {
    type: GET_ENDPOINTS_BY_ORGAN_SUCCESS,
    payload,
    params: {
      organId: organId
    },
  };
}

export function getEndPointsByOrganFailure(payload: object, organId: number): ReducerAction {
  return {
    type: GET_ENDPOINTS_BY_ORGAN_FAILURE,
    payload,
    params: {
      organId: organId
    },
  };
}
export function getEndPointsByOrganClear(): ReducerAction {
  return {
    type: GET_ENDPOINTS_BY_ORGAN_CLEAR,
    payload: null,
    params: {
      organId: 0
    },
  };
}
