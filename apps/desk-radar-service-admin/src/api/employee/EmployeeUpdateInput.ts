import { BookingUpdateManyWithoutEmployeesInput } from "./BookingUpdateManyWithoutEmployeesInput";
import { InputJsonValue } from "../../types";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type EmployeeUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  bookings?: BookingUpdateManyWithoutEmployeesInput;
  telegramUsername?: string | null;
  phone?: string | null;
  photo?: InputJsonValue;
  department?: DepartmentWhereUniqueInput | null;
};
