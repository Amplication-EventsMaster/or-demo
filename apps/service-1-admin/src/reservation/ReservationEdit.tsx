import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { RoomTitle } from "../room/RoomTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="checkInDate" source="checkInDate" />
        <DateTimeInput label="checkOutDate" source="checkOutDate" />
        <ReferenceInput source="room.id" reference="Room" label="Room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <NumberInput label="totalPrice" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
