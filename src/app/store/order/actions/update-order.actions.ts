import { createAction, props } from '@ngrx/store';
import { OrderModel } from '@core/models/order.model';

const loadUpdateOrderName = '[UpdateOrder] Load Update Order';

export const loadUpdateOrder = createAction(
  loadUpdateOrderName,
  props<{
    order: OrderModel;
  }>()
);

export const loadUpdateOrderSuccess = createAction(
  loadUpdateOrderName + ' Success',
  props<{
    order: OrderModel;
  }>()
);

export const loadUpdateOrderFailure = createAction(
  loadUpdateOrderName + ' Failure',
  props<{
    error: string;
  }>()
);
