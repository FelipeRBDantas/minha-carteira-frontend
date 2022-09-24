import { 
  POST_LOGIN_FAILURE, 
  POST_LOGIN_REQUEST, 
  POST_LOGIN_SUCCESS,
  POST_LOGIN_CLEAR,
  LOGOUT,
  PostLoginType
} from '@store/modules/api/login/postLogin/types';

import { ReducerAction } from '@store/modules/api/login/postLogin/types';

export function postLoginRequest(payload: PostLoginType): ReducerAction {
  return {
    type: POST_LOGIN_REQUEST,
    payload,
    formData: { ...payload }
  };
}

export function postLoginSuccess(payload: object): ReducerAction {
  return {
    type: POST_LOGIN_SUCCESS,
    payload,
    formData: null
  };
}

export function postLoginFailure(payload: object): ReducerAction {
  return {
    type: POST_LOGIN_FAILURE,
    payload,
    formData: null
  };
}

export function postLoginClear(): ReducerAction {
  return {
    type: POST_LOGIN_CLEAR,
    payload: null,
    formData: null
  };
}

export function logout(): ReducerAction {
  return {
    type: LOGOUT,
    payload: null,
    formData: null
  };
}
