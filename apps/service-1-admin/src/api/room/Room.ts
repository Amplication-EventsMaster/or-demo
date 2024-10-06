import { Hotel } from "../hotel/Hotel";
import { Reservation } from "../reservation/Reservation";

export type Room = {
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  price: number | null;
  reservations?: Array<Reservation>;
  roomNumber: string | null;
  typeField: string | null;
  updatedAt: Date;
};
