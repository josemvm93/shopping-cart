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
      .collection<ProductModel>(`products`, (ref) =>
        ref.orderBy('name', 'desc')
      )
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

  public getProductByIds(ids: string[]): Observable<ProductModel[]> {
    return this.firestore
      .collection<ProductModel>(`products`, (ref) =>
        ref.where('id', 'array-contains', ids)
      )
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

  public getProductById(id: string): Observable<ProductModel> {
    return this.firestore
      .collection<ProductModel>(`products`, (ref) =>
        ref.where('id', '==', id).limit(1)
      )
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          if (querySnapshot.length === 1) {
            const payloadDoc = querySnapshot[0].payload.doc;
            const data = payloadDoc.data();
            const product: ProductModel = {
              id: payloadDoc.id,
              name: data.name,
              description: data.description,
              sku: data.sku,
            };
            return product;
          }
          return null;
        })
      );
  }
}
