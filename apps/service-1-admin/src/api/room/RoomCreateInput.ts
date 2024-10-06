import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { ReservationCreateNestedManyWithoutRoomsInput } from "./ReservationCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  hotel?: HotelWhereUniqueInput | null;
  price?: number | null;
  reservations?: ReservationCreateNestedManyWithoutRoomsInput;
  roomNumber?: string | null;
  typeField?: string | null;
};
