import { createAction, props } from '@ngrx/store';
import { OrderModel } from '@core/models/order.model';

const loadAddOrderName = '[AddOrder] Load Add Order';

export const loadAddOrder = createAction(
  loadAddOrderName,
  props<{
    order: OrderModel;
  }>()
);

export const loadAddOrderSuccess = createAction(
  loadAddOrderName + ' Success',
  props<{
    order: OrderModel;
  }>()
);

export const loadAddOrderFailure = createAction(
  loadAddOrderName + ' Failure',
  props<{
    error: string;
  }>()
);
