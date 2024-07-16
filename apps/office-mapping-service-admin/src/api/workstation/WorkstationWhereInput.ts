import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WorkstationWhereInput = {
  id?: StringFilter;
  label?: StringNullableFilter;
  assignedEmployee?: StringNullableFilter;
};
