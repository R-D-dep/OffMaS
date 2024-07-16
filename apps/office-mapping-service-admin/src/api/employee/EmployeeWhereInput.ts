import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  position?: StringNullableFilter;
  department?: StringNullableFilter;
  contactDetails?: StringNullableFilter;
  photo?: JsonFilter;
  name?: StringNullableFilter;
};
