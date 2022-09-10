import { EndPointsCountState } from "@store/modules/api/endPoints/endPointsCount/types";

import { GetEndPointsByOrganState } from "@store/modules/api/endPoints/getEndPointsByOrgan/types";

import { PostEndPointState } from "@store/modules/api/endPoints/postEndPoint/types";

import { DeleteEndPointState } from "@store/modules/api/endPoints/deleteEndPoint/types";

export interface EndPointsState {
  endPointsCount: EndPointsCountState;
  getEndPointsByOrgan: GetEndPointsByOrganState;
  postEndPoint: PostEndPointState;
  deleteEndPoint: DeleteEndPointState;
}
