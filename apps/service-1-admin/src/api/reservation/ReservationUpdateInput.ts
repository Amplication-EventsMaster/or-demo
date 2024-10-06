import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationUpdateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  room?: RoomWhereUniqueInput | null;
  totalPrice?: number | null;
};
