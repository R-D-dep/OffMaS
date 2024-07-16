import { InputJsonValue } from "../../types";

export type EmployeeCreateInput = {
  position?: string | null;
  department?: string | null;
  contactDetails?: string | null;
  photo?: InputJsonValue;
  name?: string | null;
};
