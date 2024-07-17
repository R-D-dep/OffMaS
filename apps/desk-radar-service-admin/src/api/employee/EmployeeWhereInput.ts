import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type EmployeeWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  telegramUsername?: StringNullableFilter;
  phone?: StringNullableFilter;
  photo?: JsonFilter;
  department?: DepartmentWhereUniqueInput;
};
