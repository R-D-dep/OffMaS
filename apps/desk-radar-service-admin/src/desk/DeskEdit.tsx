import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RoomTitle } from "../room/RoomTitle";
import { BookingTitle } from "../booking/BookingTitle";

export const DeskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="identifier" source="identifier" />
        <ReferenceInput source="room.id" reference="Room" label="room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
