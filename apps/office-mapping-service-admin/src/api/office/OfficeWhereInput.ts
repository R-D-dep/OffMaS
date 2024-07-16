import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type OfficeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  floorPlan?: JsonFilter;
};
