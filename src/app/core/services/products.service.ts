import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductModel } from '@core/models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private firestore: AngularFirestore) {}

  public getProducts(): Observable<ProductModel[]> {
    return this.firestore
      .collection<ProductModel>(`products`, (ref) => ref.orderBy('id', 'desc'))
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          return querySnapshot.map((doc) => {
            const data = doc.payload.doc.data();
            const product: ProductModel = {
              id: doc.payload.doc.id,
              name: data.name,
              description: data.description,
              sku: data.sku,
            };
            return product;
          });
        })
      );
  }
}
