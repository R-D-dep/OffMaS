import { JsonValue } from "type-fest";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  position: string | null;
  department: string | null;
  contactDetails: string | null;
  photo: JsonValue;
  name: string | null;
};
