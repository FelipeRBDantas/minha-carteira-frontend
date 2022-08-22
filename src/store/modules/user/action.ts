import { 
  UserType, 
  GET_USER_FAILURE, 
  GET_USER_REQUEST, 
  GET_USER_SUCCESS 
} from '@store/modules/user/types';

export function getUserRequest(name: string): {
  type: string
  payload: string
} {
  return {
    type: GET_USER_REQUEST,
    payload: name
  };
}

export function getUserSuccess(user: UserType): {
  type: string
  payload: UserType
} {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  };
}

export function getUserFailure(user: UserType): {
  type: string
  payload: UserType
} {
  return {
    type: GET_USER_FAILURE,
    payload: user
  };
}
