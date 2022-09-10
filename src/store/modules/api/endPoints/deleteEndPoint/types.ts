export const DELETE_ENDPOINT_REQUEST = '@DELETE_ENDPOINT_REQUEST';
export const DELETE_ENDPOINT_SUCCESS = '@DELETE_ENDPOINT_SUCCESS';
export const DELETE_ENDPOINT_FAILURE = '@DELETE_ENDPOINT_FAILURE';
export const DELETE_ENDPOINT_CLEAR   = '@DELETE_ENDPOINT_CLEAR';

export interface DeleteEndPointState {
  data: any,
  status: number,
  params: {
    endPointId: number;
  }
}

export interface ReducerAction {
  type: string;
  payload: any;
  params: {
    endPointId: number;
  };
}
