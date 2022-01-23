import { Component, OnInit } from '@angular/core';
import { loadGetProducts } from '@app/store/products/actions/get-products.actions';
import { ProductState } from '@app/store/products/reducers/products.reducers';
import { getProducts } from '@app/store/products/selectors/products.selectors';
import { ProductModel } from '@core/models/product.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(private produtcsStore: Store<ProductState>) { }

  ngOnInit(): void {
    this.produtcsStore.dispatch(loadGetProducts());
    this.products$ = this.produtcsStore.select(getProducts);
  }

}