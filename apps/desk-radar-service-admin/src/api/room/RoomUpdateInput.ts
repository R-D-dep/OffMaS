import { DeskUpdateManyWithoutRoomsInput } from "./DeskUpdateManyWithoutRoomsInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RoomUpdateInput = {
  name?: string | null;
  desks?: DeskUpdateManyWithoutRoomsInput;
  office?: OfficeWhereUniqueInput | null;
  image?: InputJsonValue;
};
