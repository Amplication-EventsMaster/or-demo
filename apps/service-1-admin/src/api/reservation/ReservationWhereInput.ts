import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ReservationWhereInput = {
  checkInDate?: DateTimeNullableFilter;
  checkOutDate?: DateTimeNullableFilter;
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  totalPrice?: FloatNullableFilter;
};
