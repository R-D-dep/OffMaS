import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  telegramUsername?: SortOrder;
  phone?: SortOrder;
  photo?: SortOrder;
  departmentId?: SortOrder;
};
