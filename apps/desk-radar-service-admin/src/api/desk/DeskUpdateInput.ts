import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { BookingUpdateManyWithoutDesksInput } from "./BookingUpdateManyWithoutDesksInput";

export type DeskUpdateInput = {
  identifier?: string | null;
  room?: RoomWhereUniqueInput | null;
  bookings?: BookingUpdateManyWithoutDesksInput;
};
