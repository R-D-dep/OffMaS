import { WorkstationWhereInput } from "./WorkstationWhereInput";
import { WorkstationOrderByInput } from "./WorkstationOrderByInput";

export type WorkstationFindManyArgs = {
  where?: WorkstationWhereInput;
  orderBy?: Array<WorkstationOrderByInput>;
  skip?: number;
  take?: number;
};
