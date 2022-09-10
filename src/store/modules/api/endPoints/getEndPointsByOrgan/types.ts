export const GET_ENDPOINTS_BY_ORGAN_REQUEST = '@GET_ENDPOINTS_BY_ORGAN_REQUEST';
export const GET_ENDPOINTS_BY_ORGAN_SUCCESS = '@GET_ENDPOINTS_BY_ORGAN_SUCCESS';
export const GET_ENDPOINTS_BY_ORGAN_FAILURE = '@GET_ENDPOINTS_BY_ORGAN_FAILURE';
export const GET_ENDPOINTS_BY_ORGAN_CLEAR   = '@GET_ENDPOINTS_BY_ORGAN_CLEAR';

export type GetEndPointsByOrganItemType = {
  id: number,
  key: number,
  path: string,
  ambienteDev: boolean,
  ambienteHom: boolean,
  ambienteProd: boolean,
  urlBarramentoSwaggerHomolog: string,
  urlBarramentoSwaggerProducao: string,
  urlExterno: string
  orgao: string
}

export type GetEndPointsByOrganType = {
  id: number,
  key: number,
  path: string,
  ambienteDev: boolean,
  ambienteHom: boolean,
  ambienteProd: boolean,
  urlBarramentoSwaggerHomolog: string,
  urlBarramentoSwaggerProducao: string,
  urlExterno: string
  orgao: string
}[]

export interface GetEndPointsByOrganState {
  data: GetEndPointsByOrganType,
  status: number,
  params: {
    organId: number;
  }
}

export interface ReducerAction {
  type: string;
  payload: any;
  params: {
    organId: number;
  };
}
