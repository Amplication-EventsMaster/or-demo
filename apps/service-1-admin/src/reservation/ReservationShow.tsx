import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="checkInDate" source="checkInDate" />
        <TextField label="checkOutDate" source="checkOutDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Room" source="room.id" reference="Room">
          <TextField source={ROOM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="totalPrice" source="totalPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
