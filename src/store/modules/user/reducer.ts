import { 
  UserType, 
  UserState, 
  GET_USER_FAILURE, 
  GET_USER_REQUEST, 
  GET_USER_SUCCESS
} from '@store/modules/user/types';

const initialState: UserState = {
  user: {
    name: '',
    avatar_url: '',
    message: ''
  },
  send: null,
  loading: false,
  error: ''
}

export const userReducer = (state = initialState, action: {
  type: string,
  payload: UserType
}) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        user: action.payload,
        error: ''
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: ''
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
