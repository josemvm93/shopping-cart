import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductCartModel } from '@core/models/product-cart.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  readonly path = 'products-carts';

  constructor(private firestore: AngularFirestore) {}

  public getProductCart(cartId: string): Observable<ProductCartModel> {
    return this.firestore
      .collection<ProductCartModel>(this.path, (ref) =>
        ref.where('cart_id', '==', cartId)
      )
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          if (querySnapshot.length === 1) {
            const payloadDoc = querySnapshot[0].payload.doc;
            const data = payloadDoc.data();
            const productCartModel: ProductCartModel = {
              id: payloadDoc.id,
              product_id: data.product_id,
              cart_id: data.cart_id,
              quantity: data.quantity,
            };
            return productCartModel;
          }
          return null;
        })
      );
  }

  public async addProductCart(productCart: ProductCartModel): Promise<void> {
    await this.firestore.collection(this.path).add(productCart);
  }

  public async updateProductCart(productCart: ProductCartModel): Promise<void> {
    await this.firestore
      .collection(this.path)
      .doc(productCart.id)
      .update(productCart);
  }

  public async deleteProductCart(productCart: ProductCartModel): Promise<void> {
    await this.firestore.collection(this.path).doc(productCart.id).delete();
  }

  // public getByCartId(cartId: string): Observable<ProductCartModel[]> {
  //   return this.firestore
  //     .collection<ProductCartModel>(this.path, (ref) =>
  //       ref.where('cart_id', '==', cartId)
  //     )
  //     .snapshotChanges()
  //     .pipe(
  //       map((querySnapshot) =>
  //         querySnapshot.map((doc) => {
  //           const payloadDoc = doc.payload.doc;
  //           const data = payloadDoc.data();
  //           const productCartModel: ProductCartModel = {
  //             id: payloadDoc.id,
  //             product_id: data.product_id,
  //             cart_id: data.cart_id,
  //             quantity: data.quantity,
  //           };
  //           return productCartModel;
  //         })
  //       )
  //     );
  // }
}
