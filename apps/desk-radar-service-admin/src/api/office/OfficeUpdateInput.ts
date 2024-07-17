import { RoomUpdateManyWithoutOfficesInput } from "./RoomUpdateManyWithoutOfficesInput";
import { InputJsonValue } from "../../types";

export type OfficeUpdateInput = {
  name?: string | null;
  location?: string | null;
  rooms?: RoomUpdateManyWithoutOfficesInput;
  image?: InputJsonValue;
};
