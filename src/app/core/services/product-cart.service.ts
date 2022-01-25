import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductCartModel } from '@core/models/product-cart.model';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  readonly path = 'products-carts';

  constructor(
    private firestore: AngularFirestore,
    private cartService: CartService
  ) {}

  public getCurrentProductCarts(): Observable<ProductCartModel[]> {
    return this.cartService.getCurrentCart().pipe(
      switchMap((cart) => {
        return this.getProductCartsByCart(cart.id);
      })
    );
  }

  public getProductCartsByCart(cartId: string): Observable<ProductCartModel[]> {
    return this.firestore
      .collection<ProductCartModel>(this.path, (ref) =>
        ref.where('cart_id', '==', cartId).orderBy('createdAt', 'asc')
      )
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          return querySnapshot.map((docRef) => {
            const payloadDoc = docRef.payload.doc;
            const data = payloadDoc.data();
            const productCartModel: ProductCartModel = {
              id: payloadDoc.id,
              product_id: data.product_id,
              cart_id: data.cart_id,
              quantity: data.quantity,
              createdAt: data.createdAt,
            };
            return productCartModel;
          });
        })
      );
  }

  public getProductCarts(): Observable<ProductCartModel[]> {
    return this.firestore
      .collection<ProductCartModel>(this.path, (ref) =>
        ref.orderBy('createdAt', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          return querySnapshot.map((doc) => {
            const data = doc.payload.doc.data();
            const productCart: ProductCartModel = {
              id: doc.payload.doc.id,
              cart_id: data.cart_id,
              product_id: data.product_id,
              quantity: data.quantity,
              createdAt: data.createdAt,
            };
            return productCart;
          });
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
}
