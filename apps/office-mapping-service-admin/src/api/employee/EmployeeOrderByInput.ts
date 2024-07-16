import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  position?: SortOrder;
  department?: SortOrder;
  contactDetails?: SortOrder;
  photo?: SortOrder;
  name?: SortOrder;
};
