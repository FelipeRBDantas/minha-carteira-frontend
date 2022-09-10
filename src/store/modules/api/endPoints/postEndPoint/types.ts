export const POST_ENDPOINT_REQUEST = '@POST_ENDPOINT_REQUEST';
export const POST_ENDPOINT_SUCCESS = '@POST_ENDPOINT_SUCCESS';
export const POST_ENDPOINT_FAILURE = '@POST_ENDPOINT_FAILURE';
export const POST_ENDPOINT_CLEAR   = '@POST_ENDPOINT_CLEAR';

export type PostEndPointType = {
  ambienteDev: boolean,
  ambienteHom: boolean,
  ambienteProd: boolean,
  canal: [
    {
      id: number,
      id_barramento: number,
      key: number,
      name: string
    }
  ],
  contato: [
    {
      email: string,
      id_barramento: number,
      id_contato: number,
      name: string,
      numero: string
    }
  ],
  orgao: {
    id: number,
    name: string
  },
  path: string,
  urlBarramentoSwaggerHomolog: string,
  urlBarramentoSwaggerProducao: string,
  urlExterno: string
}

export interface PostEndPointState {
  data: PostEndPointType | null,
  status: number
}

export interface ReducerAction {
  type: string;
  payload: any;
}
