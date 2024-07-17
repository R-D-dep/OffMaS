import { DeskWhereInput } from "./DeskWhereInput";
import { DeskOrderByInput } from "./DeskOrderByInput";

export type DeskFindManyArgs = {
  where?: DeskWhereInput;
  orderBy?: Array<DeskOrderByInput>;
  skip?: number;
  take?: number;
};
