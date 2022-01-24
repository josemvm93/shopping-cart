import { CartModel } from './cart.model';
import { ProductModel } from './product.model';
export interface OrderProduct {
  product: ProductModel;
  quantity: number;
}

export interface OrderModel {
  id: string;
  orderProduct: OrderProduct[];
  cart: CartModel;
}
