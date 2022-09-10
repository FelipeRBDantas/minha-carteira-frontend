export const GET_ENDPOINTS_COUNT_REQUEST = '@GET_ENDPOINTS_COUNT_REQUEST';
export const GET_ENDPOINTS_COUNT_SUCCESS = '@GET_ENDPOINTS_COUNT_SUCCESS';
export const GET_ENDPOINTS_COUNT_FAILURE = '@GET_ENDPOINTS_COUNT_FAILURE';
export const GET_ENDPOINTS_COUNT_CLEAR   = '@GET_ENDPOINTS_COUNT_CLEAR';

export type EndPointsCountType = {
  id: number,
  key: number,
  name: string,
  quantidadeEndPont: number
}[]

export interface EndPointsCountState {
  data: EndPointsCountType,
  status: number
}
