import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WorkstationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="label" source="label" />
        <TextInput label="assignedEmployee" source="assignedEmployee" />
      </SimpleForm>
    </Create>
  );
};
