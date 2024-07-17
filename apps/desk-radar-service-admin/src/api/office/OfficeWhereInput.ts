import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type OfficeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  rooms?: RoomListRelationFilter;
  image?: JsonFilter;
};
