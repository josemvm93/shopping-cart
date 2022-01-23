export enum CartStatus {
  PENDING,
  COMPLETED
}

export interface CartModel {
  id: string;
  status: CartStatus;
}
