import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeskListRelationFilter } from "../desk/DeskListRelationFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  desks?: DeskListRelationFilter;
  office?: OfficeWhereUniqueInput;
  image?: JsonFilter;
};
