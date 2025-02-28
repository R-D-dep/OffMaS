import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="position" source="position" />
        <TextField label="department" source="department" />
        <TextField label="contactDetails" source="contactDetails" />
        <TextField label="photo" source="photo" />
        <TextField label="name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
