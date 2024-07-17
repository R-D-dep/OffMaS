import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { BookingCreateNestedManyWithoutDesksInput } from "./BookingCreateNestedManyWithoutDesksInput";

export type DeskCreateInput = {
  identifier?: string | null;
  room?: RoomWhereUniqueInput | null;
  bookings?: BookingCreateNestedManyWithoutDesksInput;
};
