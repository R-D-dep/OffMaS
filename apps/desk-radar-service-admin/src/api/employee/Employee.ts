import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";
import { Department } from "../department/Department";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  bookings?: Array<Booking>;
  telegramUsername: string | null;
  phone: string | null;
  photo: JsonValue;
  department?: Department | null;
};
