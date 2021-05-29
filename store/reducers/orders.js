import { ADD_ORDER, ADD_BILL_ADDR, ADD_PAYMENT_METHOD } from '../actions/orders';
import Order from '../../models/order';

const initialState = {
  orders: [],
  billAddr: [],
  paymentDetails: [],
  purchaseValid: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        action.orderData.billAddr,
        action.orderData.payment,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      };

    case ADD_BILL_ADDR:
      return { ...state, billAddr: [...state.billAddr, action.payload] };

    case ADD_PAYMENT_METHOD:
      return { ...state, paymentDetails: [...state.paymentDetails, action.payload] };
  }

  return state;
};
