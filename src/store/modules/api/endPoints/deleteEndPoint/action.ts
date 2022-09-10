import { 
  DELETE_ENDPOINT_FAILURE, 
  DELETE_ENDPOINT_REQUEST, 
  DELETE_ENDPOINT_SUCCESS,
  DELETE_ENDPOINT_CLEAR
} from '@store/modules/api/endPoints/deleteEndPoint/types';

import { ReducerAction } from '@store/modules/api/endPoints/deleteEndPoint/types';

export function deleteEndPointRequest(endPointId: number): ReducerAction {
  return {
    type: DELETE_ENDPOINT_REQUEST,
    payload: null,
    params: {
      endPointId: endPointId
    },
  };
}

export function deleteEndPointSuccess(payload: object, endPointId: number): ReducerAction {
  return {
    type: DELETE_ENDPOINT_SUCCESS,
    payload,
    params: {
      endPointId: endPointId
    },
  };
}

export function deleteEndPointFailure(payload: object, endPointId: number): ReducerAction {
  return {
    type: DELETE_ENDPOINT_FAILURE,
    payload,
    params: {
      endPointId: endPointId
    },
  };
}
export function deleteEndPointClear(): ReducerAction {
  return {
    type: DELETE_ENDPOINT_CLEAR,
    payload: null,
    params: {
      endPointId: 0
    },
  };
}
