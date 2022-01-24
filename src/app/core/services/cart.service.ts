import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { CartModel, CartStatus } from '@core/models/cart.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private firestore: AngularFirestore) {}

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
              status: data.status,
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
      .add(cart)
      .then((doc) => (cart.id = doc.id));
  }

  public async updateCart(cart: CartModel): Promise<void> {
    await this.firestore.collection('carts').doc(cart.id).update(cart);
  }

  public async deleteCart(cart: CartModel): Promise<void> {
    await this.firestore.collection('carts').doc(cart.id).delete();
  }
}
