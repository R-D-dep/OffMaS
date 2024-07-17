import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  officeId?: SortOrder;
  image?: SortOrder;
};
