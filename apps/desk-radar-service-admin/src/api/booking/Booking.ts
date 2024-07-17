import { Employee } from "../employee/Employee";
import { Desk } from "../desk/Desk";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  employee?: Employee | null;
  desk?: Desk | null;
};
