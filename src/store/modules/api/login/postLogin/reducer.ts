import {
  PostLoginState, 
  POST_LOGIN_FAILURE, 
  POST_LOGIN_REQUEST, 
  POST_LOGIN_SUCCESS,
  POST_LOGIN_CLEAR,
  LOGOUT
} from '@store/modules/api/login/postLogin/types';

import { ReducerAction } from '@store/modules/api/login/postLogin/types';

const initialState: PostLoginState = {
  data: null,
  status: 0,
  isLogged: true, // Está true para teste sem serviço backend
  formData: null
}

export const postLoginReducer = (state = initialState, action: ReducerAction) : PostLoginState => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        status: 100,
        formData: action.formData
      };
    case POST_LOGIN_SUCCESS:
      localStorage.setItem('@minha-carteira:logged', 'true');

      return {
        ...state,
        data: action.payload,
        status: 200,
        isLogged: true,
        formData: action.formData
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        isLogged: true, // Está true para teste sem serviço backend
        formData: action.formData
      };
      
    case POST_LOGIN_CLEAR:
      return {
        ...state,
        data: initialState.data,
        status: initialState.status,
        isLogged: initialState.isLogged,
        formData: initialState.formData
      };

    case LOGOUT:
      localStorage.setItem('@minha-carteira:logged', 'false');

      return {
        ...state,
        data: initialState.data,
        status: initialState.status,
        isLogged: false,
        formData: initialState.formData
      };
    default:
      return state;
  }
}
