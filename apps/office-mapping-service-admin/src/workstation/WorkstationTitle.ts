import { Workstation as TWorkstation } from "../api/workstation/Workstation";

export const WORKSTATION_TITLE_FIELD = "label";

export const WorkstationTitle = (record: TWorkstation): string => {
  return record.label?.toString() || String(record.id);
};
