import { BookingCreateNestedManyWithoutEmployeesInput } from "./BookingCreateNestedManyWithoutEmployeesInput";
import { InputJsonValue } from "../../types";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type EmployeeCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  bookings?: BookingCreateNestedManyWithoutEmployeesInput;
  telegramUsername?: string | null;
  phone?: string | null;
  photo?: InputJsonValue;
  department?: DepartmentWhereUniqueInput | null;
};
