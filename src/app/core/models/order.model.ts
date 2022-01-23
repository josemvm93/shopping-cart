import { CartModel } from './cart.model';
import { ProductModel } from './product.model';

export interface OrderModel {
  product: ProductModel;
  quantity: number;
  cart: CartModel;
}
