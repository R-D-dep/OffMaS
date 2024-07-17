import { Desk as TDesk } from "../api/desk/Desk";

export const DESK_TITLE_FIELD = "identifier";

export const DeskTitle = (record: TDesk): string => {
  return record.identifier?.toString() || String(record.id);
};
