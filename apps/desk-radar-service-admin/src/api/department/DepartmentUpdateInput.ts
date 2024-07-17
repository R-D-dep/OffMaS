import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  name?: string | null;
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
};
