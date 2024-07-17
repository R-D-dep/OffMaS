import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DeskWhereUniqueInput } from "../desk/DeskWhereUniqueInput";

export type BookingCreateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  desk?: DeskWhereUniqueInput | null;
};
