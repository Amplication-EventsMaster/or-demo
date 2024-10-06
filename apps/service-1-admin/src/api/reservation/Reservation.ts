import { Room } from "../room/Room";

export type Reservation = {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  createdAt: Date;
  id: string;
  room?: Room | null;
  totalPrice: number | null;
  updatedAt: Date;
};
