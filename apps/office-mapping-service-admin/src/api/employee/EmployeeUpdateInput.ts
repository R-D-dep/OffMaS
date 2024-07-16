import { InputJsonValue } from "../../types";

export type EmployeeUpdateInput = {
  position?: string | null;
  department?: string | null;
  contactDetails?: string | null;
  photo?: InputJsonValue;
  name?: string | null;
};
