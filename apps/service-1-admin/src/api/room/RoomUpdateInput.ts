import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { ReservationUpdateManyWithoutRoomsInput } from "./ReservationUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  hotel?: HotelWhereUniqueInput | null;
  price?: number | null;
  reservations?: ReservationUpdateManyWithoutRoomsInput;
  roomNumber?: string | null;
  typeField?: string | null;
};
