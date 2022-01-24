import { createAction, props } from '@ngrx/store';
import { OrderModel } from '@core/models/order.model';

const loadDeleteOrderName = '[DeleteOrder] Load Delete Order';

export const loadDeleteOrder = createAction(
  loadDeleteOrderName,
  props<{
    order: OrderModel;
  }>()
);

export const loadDeleteOrderSuccess = createAction(
  loadDeleteOrderName + ' Success',
  props<{
    order: OrderModel;
  }>()
);

export const loadDeleteOrderFailure = createAction(
  loadDeleteOrderName + ' Failure',
  props<{
    error: string;
  }>()
);
