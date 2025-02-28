import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="position" source="position" />
        <TextInput label="department" source="department" />
        <TextInput label="contactDetails" multiline source="contactDetails" />
        <div />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
