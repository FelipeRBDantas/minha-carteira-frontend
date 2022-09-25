import { 
  POST_LOGIN_FAILURE, 
  POST_LOGIN_REQUEST, 
  POST_LOGIN_SUCCESS,
  POST_LOGIN_CLEAR,
  LOGOUT,
  PostLoginType
} from '@store/modules/api/login/postLogin/types';

import { ReducerAction } from '@store/types';

export function postLoginRequest(payload: PostLoginType): ReducerAction {
  return {
    type: POST_LOGIN_FAILURE,
    payload
  };
}

export function postLoginSuccess(payload: object): ReducerAction {
  return {
    type: POST_LOGIN_REQUEST,
    payload
  };
}

export function postLoginFailure(payload: object): ReducerAction {
  return {
    type: POST_LOGIN_SUCCESS,
    payload
  };
}

export function postLoginClear(): ReducerAction {
  return {
    type: POST_LOGIN_CLEAR,
    payload: null
  };
}

export function logout(): ReducerAction {
  return {
    type: LOGOUT,
    payload: null
  };
}
