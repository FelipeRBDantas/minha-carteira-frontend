import {
  PostLoginState, 
  POST_LOGIN_FAILURE, 
  POST_LOGIN_REQUEST, 
  POST_LOGIN_SUCCESS,
  POST_LOGIN_CLEAR,
  LOGOUT
} from '@store/modules/api/login/postLogin/types';

import { ReducerAction } from '@store/types';

const initialState: PostLoginState = {
  data: null,
  isLogged: null,
  status: 0
}

export const postLoginReducer = (state = initialState, action: ReducerAction) : PostLoginState => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        status: 100
      };
    case POST_LOGIN_SUCCESS:
      localStorage.setItem('@minha-carteira:logged', 'true');

      return {
        ...state,
        data: action.payload,
        isLogged: true,
        status: 200
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        isLogged: false,
        status: action.payload.status
      };
      
    case POST_LOGIN_CLEAR:
      return {
        ...state,
        data: initialState.data,
        isLogged: initialState.isLogged,
        status: initialState.status
      };

    case LOGOUT:
      localStorage.setItem('@minha-carteira:logged', 'false');

      return {
        ...state,
        data: initialState.data,
        isLogged: false,
        status: initialState.status
      };
    default:
      return state;
  }
}
