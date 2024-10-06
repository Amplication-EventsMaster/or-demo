import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  price?: FloatNullableFilter;
  reservations?: ReservationListRelationFilter;
  roomNumber?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
