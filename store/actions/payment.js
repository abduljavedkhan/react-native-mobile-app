export const ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD';

export const addPaymentMethod = payload => {
  return { type: ADD_PAYMENT_METHOD, payload: payload };
};
