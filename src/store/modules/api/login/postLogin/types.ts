export const POST_LOGIN_REQUEST = '@POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = '@POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = '@POST_LOGIN_FAILURE';
export const POST_LOGIN_CLEAR   = '@POST_LOGIN_CLEAR';

export type PostLoginType = {
  urlExterno: string
}

export interface PostLogintState {
  data: PostLoginType | null,
  status: number
}
