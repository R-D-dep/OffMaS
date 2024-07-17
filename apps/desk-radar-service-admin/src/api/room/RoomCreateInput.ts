import { DeskCreateNestedManyWithoutRoomsInput } from "./DeskCreateNestedManyWithoutRoomsInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RoomCreateInput = {
  name?: string | null;
  desks?: DeskCreateNestedManyWithoutRoomsInput;
  office?: OfficeWhereUniqueInput | null;
  image?: InputJsonValue;
};
