import {
  PostLogintState, 
  POST_LOGIN_FAILURE, 
  POST_LOGIN_REQUEST, 
  POST_LOGIN_SUCCESS,
  POST_LOGIN_CLEAR
} from '@store/modules/api/login/postLogin/types';

import { ReducerAction } from '@store/types';

const initialState: PostLogintState = {
  data: null,
  status: 0
}

export const postLoginReducer = (state = initialState, action: ReducerAction) : PostLogintState => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        status: 100
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: 200
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status
      };
      
    case POST_LOGIN_CLEAR:
      return {
        ...state,
        data: initialState.data,
        status: initialState.status
      };
    default:
      return state;
  }
}
