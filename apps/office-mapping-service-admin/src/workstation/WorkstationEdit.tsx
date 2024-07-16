import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WorkstationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="label" source="label" />
        <TextInput label="assignedEmployee" source="assignedEmployee" />
      </SimpleForm>
    </Edit>
  );
};
