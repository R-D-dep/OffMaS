import { SortOrder } from "../../util/SortOrder";

export type OfficeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  location?: SortOrder;
  image?: SortOrder;
};
