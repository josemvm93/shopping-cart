import firebase from 'firebase';

export interface ProductCartModel {
  id: string;
  product_id: string;
  cart_id: string;
  quantity: number;
  createdAt: firebase.firestore.FieldValue;
}
