import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  checkInDate?: SortOrder;
  checkOutDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
