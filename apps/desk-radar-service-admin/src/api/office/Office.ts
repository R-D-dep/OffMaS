import { Room } from "../room/Room";
import { JsonValue } from "type-fest";

export type Office = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  rooms?: Array<Room>;
  image: JsonValue;
};
