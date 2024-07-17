import { Room } from "../room/Room";
import { Booking } from "../booking/Booking";

export type Desk = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  identifier: string | null;
  room?: Room | null;
  bookings?: Array<Booking>;
};
