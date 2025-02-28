import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="position" source="position" />
        <TextField label="department" source="department" />
        <TextField label="contactDetails" source="contactDetails" />
        <TextField label="photo" source="photo" />
        <TextField label="name" source="name" />
      </Datagrid>
    </List>
  );
};
