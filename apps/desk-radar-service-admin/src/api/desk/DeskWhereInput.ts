import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type DeskWhereInput = {
  id?: StringFilter;
  identifier?: StringNullableFilter;
  room?: RoomWhereUniqueInput;
  bookings?: BookingListRelationFilter;
};
