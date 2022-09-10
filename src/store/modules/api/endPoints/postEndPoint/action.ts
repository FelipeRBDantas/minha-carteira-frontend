import { 
  POST_ENDPOINT_FAILURE, 
  POST_ENDPOINT_REQUEST, 
  POST_ENDPOINT_SUCCESS,
  POST_ENDPOINT_CLEAR,
  PostEndPointType
} from '@store/modules/api/endPoints/postEndPoint/types';

import { ReducerAction } from '@store/modules/api/endPoints/postEndPoint/types';

export function postEndPointRequest(payload: PostEndPointType): ReducerAction {
  return {
    type: POST_ENDPOINT_REQUEST,
    payload
  };
}

export function postEndPointSuccess(payload: object): ReducerAction {
  return {
    type: POST_ENDPOINT_SUCCESS,
    payload
  };
}

export function postEndPointFailure(payload: object): ReducerAction {
  return {
    type: POST_ENDPOINT_FAILURE,
    payload
  };
}
export function postEndPointClear(): ReducerAction {
  return {
    type: POST_ENDPOINT_CLEAR,
    payload: null
  };
}
