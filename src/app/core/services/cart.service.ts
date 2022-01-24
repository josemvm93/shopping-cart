import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartModel, CartStatus } from '@core/models/cart.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private firestore: AngularFirestore) {}

  public test(): Observable<any> {
    return this.firestore
      .collection<any>(`products-cart`)
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          return querySnapshot.map((doc) => {
            const data = doc.payload.doc.data();
            console.log('data ', data);
            return data;
          });
        })
      );
  }
  public getCurrentCart(): Observable<CartModel> {
    return this.firestore
      .collection<CartModel>(`carts`, (ref) =>
        ref.where('status', '==', CartStatus.PENDING).limit(1)
      )
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          if (querySnapshot.length === 1) {
            const payloadDoc = querySnapshot[0].payload.doc;
            const data = payloadDoc.data();
            const cart: CartModel = {
              id: payloadDoc.id,
              status: data.status
            };
            return cart;
          }
          return null;
        })
      );
  }

  public async addCart(cart: CartModel): Promise<void> {
    await this.firestore
      .collection('carts')
      .add(cart);
  }

  public async updateCart(cart: CartModel): Promise<void> {
    await this.firestore
      .collection('carts')
      .doc(cart.id)
      .update(cart);
  }

  public async deleteCart(cart: CartModel): Promise<void> {
    await this.firestore
      .collection('carts')
      .doc(cart.id)
      .delete();
  }
}
