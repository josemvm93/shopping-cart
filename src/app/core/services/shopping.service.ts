import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private user!: firebase.User | null;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe((user) => (this.user = user));
  }


}
