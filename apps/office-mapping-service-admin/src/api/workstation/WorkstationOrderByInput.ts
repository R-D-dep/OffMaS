import { SortOrder } from "../../util/SortOrder";

export type WorkstationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  label?: SortOrder;
  assignedEmployee?: SortOrder;
};
