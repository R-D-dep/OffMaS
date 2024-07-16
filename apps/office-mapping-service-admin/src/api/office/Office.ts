import { JsonValue } from "type-fest";

export type Office = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  floorPlan: JsonValue;
};
