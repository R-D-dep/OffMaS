import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DeskWhereUniqueInput } from "../desk/DeskWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  desk?: DeskWhereUniqueInput;
};
