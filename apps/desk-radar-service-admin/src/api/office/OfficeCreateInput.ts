import { RoomCreateNestedManyWithoutOfficesInput } from "./RoomCreateNestedManyWithoutOfficesInput";
import { InputJsonValue } from "../../types";

export type OfficeCreateInput = {
  name?: string | null;
  location?: string | null;
  rooms?: RoomCreateNestedManyWithoutOfficesInput;
  image?: InputJsonValue;
};
