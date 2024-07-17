import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  name?: string | null;
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;
};
