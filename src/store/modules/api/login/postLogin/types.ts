export const POST_LOGIN_REQUEST = '@POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = '@POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = '@POST_LOGIN_FAILURE';
export const POST_LOGIN_CLEAR   = '@POST_LOGIN_CLEAR';
export const LOGOUT = '@LOGOUT';

export type PostLoginData = {
  email: string
  password: string
}

export type PostLoginType = {
  email: string
  password: string
}

export interface PostLoginState {
  data: PostLoginData | null,
  status: number
  isLogged: boolean | null;
  formData: PostLoginType | null;
}

export interface ReducerAction {
  type: string;
  payload: any;
  formData: {
    email: string;
    password: string;
  } | null;
}
