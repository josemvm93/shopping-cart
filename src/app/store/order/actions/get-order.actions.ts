import { createAction, props } from '@ngrx/store';
import { OrderModel } from '@core/models/order.model';

const loadGetOrderName = '[GetOrder] Load Get Order';

export const loadGetOrder = createAction(
  loadGetOrderName,
  props<{
    order: OrderModel;
  }>()
);

export const loadGetOrderSuccess = createAction(
  loadGetOrderName + ' Success',
  props<{
    order: OrderModel;
  }>()
);

export const loadGetOrderFailure = createAction(
  loadGetOrderName + ' Failure',
  props<{
    error: string;
  }>()
);
