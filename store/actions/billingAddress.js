export const ADD_BILL_ADDR = 'ADD_BILL_ADDR';

export const addBillAddr = payload => {
  return { type: ADD_BILL_ADDR, payload: payload };
};
