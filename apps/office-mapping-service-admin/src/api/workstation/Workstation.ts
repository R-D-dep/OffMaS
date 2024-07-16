export type Workstation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  label: string | null;
  assignedEmployee: string | null;
};
