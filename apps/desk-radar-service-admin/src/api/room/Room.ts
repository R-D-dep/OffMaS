import { Desk } from "../desk/Desk";
import { Office } from "../office/Office";
import { JsonValue } from "type-fest";

export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  desks?: Array<Desk>;
  office?: Office | null;
  image: JsonValue;
};
