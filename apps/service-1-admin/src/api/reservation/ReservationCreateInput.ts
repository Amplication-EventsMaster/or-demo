import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationCreateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  room?: RoomWhereUniqueInput | null;
  totalPrice?: number | null;
};
